import {
  ApiComment,
  ApiPost,
  NestedComment,
  NestedPost,
} from '../../types/posts';

export const organizeCommentsAsTree = (comments: ApiComment[]) => {
  const map = new Map();
  comments.forEach((comment) => {
    map.set(comment.id, { ...comment, replies: [] });
  });

  const tree: NestedComment[] = [];
  map.forEach((comment) => {
    if (comment.respondsTo && comment.respondsTo.id) {
      map.get(comment.respondsTo.id).replies.push(comment);
    } else {
      tree.push(comment);
    }
  });

  return tree;
};

export const organizePostCommentsAsTree = (post: ApiPost) => {
  const comments = organizeCommentsAsTree(post.comments);
  return { ...post, comments } as NestedPost;
};

export const extractParagraphTexts = (content: string) => {
  const regex = /<p>(.*?)<\/p>/g;

  const matches = content.match(regex);

  if (!matches) return [];
  return matches.map((tag) => tag.replace(/<\/?p>/g, ''));
};

export const updatePostComments = (
  comments: NestedComment[],
  parent: number,
  newComment: NestedComment
): NestedComment[] => {
  const newComments = [...comments];

  const updateComments = (comments: NestedComment[]): NestedComment[] => {
    for (let i = 0; i < comments.length; i++) {
      const comment = comments[i];

      if (comment.id === parent) {
        const nestedNewComment: NestedComment = {
          ...newComment,
          replies: [],
        };

        const updatedParentComment = {
          ...comment,
          replies: [nestedNewComment, ...comment.replies],
        };

        comments[i] = updatedParentComment;

        return comments;
      }

      if (!comment.replies) return [];

      const updatedReplies = updateComments(comment.replies);
      if (updatedReplies !== comment.replies) {
        comments[i].replies = updatedReplies;
        return comments;
      }
    }
    return comments;
  };

  return updateComments(newComments);
};

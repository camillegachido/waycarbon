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
  const parentIndex = comments.findIndex((comment) => comment.id === parent);

  if (parentIndex === -1) return comments;

  const clonedComments = [...comments];
  const parentComment = clonedComments[parentIndex];

  const updatedParentComment = {
    ...parentComment,
    replies: [newComment, ...parentComment.replies],
  };

  clonedComments[parentIndex] = updatedParentComment;

  return clonedComments;
};

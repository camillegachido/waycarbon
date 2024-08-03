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

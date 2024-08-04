import { useContext, useState } from 'react';
import { ApiComment, NestedComment } from '../../../common/types/posts';
import { PostCommentUseCase } from '../../../usecase';
import { AuthContext } from '../../../contexts/auth';
import { updatePostComments } from '../../../common/utils';

export const useComments = (initialComments: NestedComment[]) => {
  const { user } = useContext(AuthContext);
  const [comments, setComments] = useState<NestedComment[]>(initialComments);
  const [isLoading, setIsLoading] = useState(false);

  const addComment = (parent: number, comment: string) => {
    const newComment: ApiComment = {
      author: user,
      timestamp: new Date().toISOString(),
      content: comment,
      id: new Date().getTime(),
      respondsTo: { id: parent },
    };

    setIsLoading(true);
    new PostCommentUseCase()
      .execute(newComment)
      .then((data) => {
        const newComments = updatePostComments(comments, parent, data);
        setComments(newComments);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return { isLoading, comments, addComment };
};
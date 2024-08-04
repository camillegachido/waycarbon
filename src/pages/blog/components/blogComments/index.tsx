import { NestedComment } from '../../../../common/types/posts';
import { Comment } from '../../../../components/application/comment';
import { useComments } from '../../hook';
import { Title } from './index.styled';
import { ApiGenericUser } from '../../../../common/types/user';

interface Props {
  initialComments: NestedComment[];
  onAuthorClick: (author: ApiGenericUser) => void;
}
export const BlogComments = ({ initialComments, onAuthorClick }: Props) => {
  const { comments, addComment } = useComments(initialComments);

  return (
    <>
      <Title>Comentários</Title>
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          comment={comment}
          onSave={addComment}
          onClick={onAuthorClick}
        />
      ))}
    </>
  );
};

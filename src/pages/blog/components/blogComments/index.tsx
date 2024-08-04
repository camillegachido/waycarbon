import { NestedComment } from '../../../../common/types/posts';
import { Comment } from '../../../../components/application/comment';
import { useComments } from '../../hook';
import { Title } from './index.styled';

interface Props {
  initialComments: NestedComment[];
}
export const BlogComments = ({ initialComments }: Props) => {
  const { isLoading, comments, addComment } = useComments(initialComments);

  return (
    <>
      <Title>Comentários</Title>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} onSave={addComment} />
      ))}
    </>
  );
};

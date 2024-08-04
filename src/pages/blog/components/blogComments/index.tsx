import { NestedComment } from '../../../../common/types/posts';
import { Comment } from '../../../../components/application/comment';
import { Title } from './index.styled';

interface Props {
  comments: NestedComment[];
}
export const BlogComments = ({ comments }: Props) => {
  return (
    <>
      <Title>Comentários</Title>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} onSave={() => {}} />
      ))}
    </>
  );
};

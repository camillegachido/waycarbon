import { componentsTestId } from '../../../common/constants/testid';
import { NestedComment } from '../../../common/types/posts';
import { CommentActions } from './commentActions';
import { Author, Container, Text } from './index.styled';

interface Props {
  onSave: (id: number, text: string) => Promise<void>;
  comment: NestedComment;
}

export const Comment = ({ onSave, comment }: Props) => {
  const handleSave = async (text: string) => {
    await onSave(comment.id, text);
  };

  return (
    <Container data-testid={componentsTestId.comment.container}>
      <Author>
        {comment.author.username} - {comment.timestamp}
      </Author>
      <Text>{comment.content}</Text>
      <CommentActions onSave={handleSave} />
      {comment.replies.map((reply) => (
        <Comment onSave={onSave} comment={reply} key={`replied-${reply.id}`} />
      ))}
    </Container>
  );
};

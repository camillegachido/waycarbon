import { NestedComment } from '../../../common/types/posts';
import { CommentActions } from './commentActions';
import { Author, Container, Text } from './index.styled';

interface Props {
  onSave: (id: number, value: string) => void;
  comment: NestedComment;
}

export const Comment = ({ onSave, comment }: Props) => {
  const handleSave = (text: string) => {
    onSave(comment.id, text);
  };

  return (
    <Container>
      <Author>
        {comment.author.username} - {comment.timestamp}
      </Author>
      <Text>{comment.content}</Text>
      <CommentActions onSave={handleSave} />
      {comment.replies.map((reply) => (
        <Comment onSave={onSave} comment={reply} />
      ))}
    </Container>
  );
};

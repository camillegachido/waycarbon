import { componentsTestId } from '../../../common/constants/testid';
import { NestedComment } from '../../../common/types/posts';
import { GenericUser } from '../../../common/types/user';
import { CommentActions } from './commentActions';
import { Author, Container, Text } from './index.styled';

interface Props {
  onSave: (id: number, text: string) => Promise<void>;
  comment: NestedComment;
  onClick: (author: GenericUser) => void;
}

export const Comment = ({ onSave, comment, onClick }: Props) => {
  const handleSave = async (text: string) => {
    await onSave(comment.id, text);
  };

  const handleAuthorClick = (author: GenericUser) => {
    onClick(author);
  };

  return (
    <Container data-testid={componentsTestId.comment.container}>
      <Author onClick={() => handleAuthorClick(comment.author)}>
        {comment.author.username} - {comment.timestamp}
      </Author>
      <Text>{comment.content}</Text>
      <CommentActions onSave={handleSave} />
      {comment.replies.map((reply) => (
        <Comment
          onSave={onSave}
          comment={reply}
          key={`replied-${reply.id}`}
          onClick={onClick}
        />
      ))}
    </Container>
  );
};

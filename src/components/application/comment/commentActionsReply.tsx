import { useState } from 'react';
import { Button } from '../../common';
import { ActionsGroup, TextArea } from './index.styled';
import { componentsTestId } from '../../../common/constants/testid';

interface Props {
  onClose: () => void;
  onSave: (text: string) => Promise<void>;
}

export const CommentActionsReply = ({ onClose, onSave }: Props) => {
  const [text, setText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const handleSave = async () => {
    try {
      setIsLoading(true);
      await onSave(text);
      onClose();
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div data-testid={componentsTestId.comment.reply}>
      <TextArea
        onChange={handleChange}
        value={text}
        data-testid={componentsTestId.comment.replyText}
      />
      <ActionsGroup>
        <Button
          onClick={handleSave}
          disabled={text.length === 0}
          isLoading={isLoading}
        >
          Responder
        </Button>
        <Button variant="text" onClick={onClose}>
          Cancelar
        </Button>
      </ActionsGroup>
    </div>
  );
};

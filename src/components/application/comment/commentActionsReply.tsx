import { useState } from 'react';
import { Button } from '../../common';
import { ActionsGroup, TextArea } from './index.styled';
import { componentsTestId } from '../../../common/constants/testid';

interface Props {
  onClose: () => void;
  onSave: (text: string) => void;
}

export const CommentActionsReply = ({ onClose, onSave }: Props) => {
  const [text, setText] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const handleSave = () => {
    onSave(text);
  };

  return (
    <div data-testid={componentsTestId.comment.reply}>
      <TextArea
        onChange={handleChange}
        value={text}
        data-testid={componentsTestId.comment.replyText}
      />
      <ActionsGroup>
        <Button onClick={handleSave} disabled={text.length === 0}>
          Responder
        </Button>
        <Button variant="text" onClick={onClose}>
          Cancelar
        </Button>
      </ActionsGroup>
    </div>
  );
};

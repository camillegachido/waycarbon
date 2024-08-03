import { useState } from 'react';
import { Button } from '../../common';
import { ActionsGroup, TextArea } from './index.styled';

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
    <>
      <TextArea onChange={handleChange} value={text} />
      <ActionsGroup>
        <Button onClick={handleSave} disabled={text.length === 0}>
          Responder
        </Button>
        <Button variant="text" onClick={onClose}>
          Cancelar
        </Button>
      </ActionsGroup>
    </>
  );
};

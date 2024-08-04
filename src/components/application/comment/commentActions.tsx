import { ActionButton, Actions, ActionsGroup } from './index.styled';
import Reply from '../../../assets/icons/reply.svg';
import Share from '../../../assets/icons/share.svg';
import Report from '../../../assets/icons/report.svg';
import { useState } from 'react';
import { CommentActionsReply } from './commentActionsReply';
import { componentsTestId } from '../../../common/constants/testid';

interface Props {
  onSave: (text: string) => Promise<void>;
}

export const CommentActions = ({ onSave }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);
  const handleOpen = () => setIsOpen(true);

  if (isOpen)
    return <CommentActionsReply onClose={handleClose} onSave={onSave} />;

  return (
    <Actions data-testid={componentsTestId.comment.actions}>
      <ActionsGroup>
        <ActionButton
          onClick={handleOpen}
          data-testid={componentsTestId.comment.replybutton}
        >
          <img src={Reply} alt="ícone de responder" />
          <span>Responder</span>
        </ActionButton>
        <ActionButton>
          <img src={Share} alt="ícone de compartilhamento" />
          <span>Compartilhar</span>
        </ActionButton>
      </ActionsGroup>
      <div>
        <ActionButton>
          <img src={Report} alt="ícone de reportar" />
          <span>Reportar</span>
        </ActionButton>
      </div>
    </Actions>
  );
};

import { ActionButton, Actions, ActionsGroup } from './index.styled';
import Reply from '../../../assets/icons/reply.svg';
import Share from '../../../assets/icons/share.svg';
import Report from '../../../assets/icons/report.svg';
import { useState } from 'react';
import { CommentActionsReply } from './commentActionsReply';

export const CommentActions = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  if (isOpen)
    return <CommentActionsReply onClose={handleClose} onSave={() => {}} />;

  return (
    <Actions>
      <ActionsGroup>
        <ActionButton onClick={handleOpen}>
          <img src={Reply} />
          <span>Responder</span>
        </ActionButton>
        <ActionButton>
          <img src={Share} />
          <span>Compartilhar</span>
        </ActionButton>
      </ActionsGroup>
      <div>
        <ActionButton>
          <img src={Report} />
          <span>Reportar</span>
        </ActionButton>
      </div>
    </Actions>
  );
};

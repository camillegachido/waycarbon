import { PropsWithChildren } from 'react';
import { Background, Container } from './index.styled';
import { componentsTestId } from '../../common/constants/testid';

interface Props extends PropsWithChildren {
  isOpen: boolean;
  onClose: () => void;
}

export const Modal = ({ isOpen, onClose, children }: Props) => {
  if (!isOpen) return <></>;

  return (
    <Background
      onClick={onClose}
      data-testid={componentsTestId.modal.background}
    >
      <Container>{children}</Container>
    </Background>
  );
};

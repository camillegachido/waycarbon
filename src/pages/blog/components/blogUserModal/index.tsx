import { GenericUser } from '../../../../common/types/user';
import { Button, Modal, User } from '../../../../components';
import { ButtonSection, Divider, FollowSection } from './index.styled';
import { useVisitedUser } from '../../hook/useVisitedUser';
import { Content } from './content';

interface Props {
  visitedUser: GenericUser;
  onClose: () => void;
}

export const BlogUserModal = ({ visitedUser, onClose }: Props) => {
  const { user, isFollowed } = useVisitedUser(visitedUser.id);

  return (
    <Modal isOpen onClose={onClose}>
      <User user={visitedUser} time={user?.memberSince ?? ''} />
      <Divider />
      <ButtonSection>
        <FollowSection>
          {isFollowed ? (
            <Button variant="outlined">Deixar de seguir</Button>
          ) : (
            <Button>Seguir</Button>
          )}
          <Button variant="outlined">Enviar Mensagem</Button>
        </FollowSection>
        <Button color="error" variant="outlined">
          Reportar
        </Button>
      </ButtonSection>
      <Content user={user} />
    </Modal>
  );
};

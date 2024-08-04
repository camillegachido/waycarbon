import { GenericUser } from '../../../common/types/user';
import { Button } from '../../common';
import { Container, Image, InfoContainer, Name } from './index.styled';

interface Props {
  user: GenericUser;
}

export const Friend = ({ user }: Props) => {
  return (
    <Container>
      <InfoContainer>
        <Image src={user.avatar_url} alt={user.username + ' avatar'} />
        <Name>{user.username}</Name>
      </InfoContainer>
      <Button variant="outlined" small>
        Deixar de seguir
      </Button>
    </Container>
  );
};

import { GenericUser } from '../../../common/types/user';
import { Container, Image, Name, Date } from './index.styled';

interface Props {
  user: GenericUser;
  time: string;
}

export const User = ({ user, time }: Props) => {
  return (
    <Container>
      <Image src="" alt={user.username + ' avatar'} />
      <div>
        <Name>{user.username}</Name>
        <Date>{time}</Date>
      </div>
    </Container>
  );
};

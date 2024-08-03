import { User as IUser } from '../../common/types/user';
import { Container, Image, Name, Date } from './index.styled';

interface Props {
  user: IUser;
}

export const User = ({ user }: Props) => {
  return (
    <Container>
      <Image src="" alt={user.username + ' avatar'} />
      <div>
        <Name>{user.username}</Name>
        <Date>{user.memberSince}</Date>
      </div>
    </Container>
  );
};

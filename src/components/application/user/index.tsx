import { GenericUser } from '../../../common/types/user';
import { Container, Image, Name, Date } from './index.styled';

interface Props {
  user: GenericUser;
  time: string;
  onClick?: () => void;
}

export const User = ({ user, time, onClick }: Props) => {
  const isClickable = !!onClick;

  return (
    <Container isClickable={isClickable} onClick={onClick}>
      <Image src="" alt={user.username + ' avatar'} />
      <div>
        <Name>{user.username}</Name>
        <Date>{time}</Date>
      </div>
    </Container>
  );
};

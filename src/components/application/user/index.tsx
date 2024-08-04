import { GenericUser } from '../../../common/types/user';
import { formatDate } from '../../../common/utils';
import { Container, Image, Name, Date } from './index.styled';
import LoadAvatar from '../../../assets/images/load-avatar.jpg';

interface Props {
  user: GenericUser;
  time: string;
  onClick?: () => void;
}

export const User = ({ user, time, onClick }: Props) => {
  const isClickable = !!onClick;

  return (
    <Container isClickable={isClickable} onClick={onClick}>
      <Image
        src={user.avatar_url}
        alt={user.username + ' avatar'}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src = LoadAvatar;
        }}
      />
      <div>
        <Name>{user.username}</Name>
        <Date>{formatDate(time)}</Date>
      </div>
    </Container>
  );
};

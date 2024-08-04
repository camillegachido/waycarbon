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

  const url = user.avatar_url !== '' ? user.avatar_url : LoadAvatar;
  return (
    <Container isClickable={isClickable} onClick={onClick}>
      <Image src={url} alt={user.username + ' avatar'} />
      <div>
        <Name>{user.username}</Name>
        <Date>{formatDate(time)}</Date>
      </div>
    </Container>
  );
};

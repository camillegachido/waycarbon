import { useContext } from 'react';
import { NestedPost } from '../../../../common/types/posts';
import { GenericUser } from '../../../../common/types/user';
import { User } from '../../../../components';
import { Subtitle, Title } from './index.styled';
import { AuthContext } from '../../../../contexts/auth';

interface Props {
  post: NestedPost;
  onAuthorClick: (author: GenericUser) => void;
}

export const BlogHeader = ({ post, onAuthorClick }: Props) => {
  const { user: loggedUser } = useContext(AuthContext);

  const onUserClick =
    post.author.id !== loggedUser.id
      ? () => onAuthorClick(post.author)
      : undefined;

  return (
    <header>
      <Title>{post.title}</Title>
      <Subtitle>{post.subtitle}</Subtitle>
      <User user={post.author} time={post.timestamp} onClick={onUserClick} />
    </header>
  );
};

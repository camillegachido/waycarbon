import { NestedPost } from '../../../../common/types/posts';
import { User } from '../../../../components';
import { Subtitle, Title } from './index.styled';

interface Props {
  post: NestedPost;
}

export const BlogHeader = ({ post }: Props) => {
  return (
    <header>
      <Title>{post.title}</Title>
      <Subtitle>{post.subtitle}</Subtitle>
      <User user={post.author} time={post.timestamp} />
    </header>
  );
};

import { SimplePost } from '../../../common/types/posts';
import { Container, Subtitle, Title, Text, ReadMore } from './index.styled';

interface Props {
  post: SimplePost;
}

export const Post = ({ post }: Props) => {
  const content = post.content.replace(/<[^>]*>?/gm, '').substring(0, 180);

  return (
    <Container>
      <Title>{post.title}</Title>
      <Subtitle>{post.subtitle}</Subtitle>
      <Text>{content}</Text>
      <ReadMore href="/">Ler mais</ReadMore>
    </Container>
  );
};

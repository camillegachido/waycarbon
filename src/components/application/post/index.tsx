import { SimplePost } from '../../../common/types/posts';
import { Container, Subtitle, Title, Text, ReadMore } from './index.styled';

interface Props {
  post: SimplePost;
}

export const Post = ({ post }: Props) => {
  return (
    <Container>
      <Title>{post.title}</Title>
      <Subtitle>{post.subtitle}</Subtitle>
      <Text>{post.content}</Text>
      <ReadMore href="/">Ler mais</ReadMore>
    </Container>
  );
};

import { CommentActions } from './commentActions';
import { Author, Container, Text } from './index.styled';

export const Comment = () => {
  return (
    <Container>
      <Author>Joana Vasconcellos - 20 fev 2019, às 17h30</Author>
      <Text>
        O empenho em analisar a consolidação das estruturas oferece uma
        interessante oportunidade para verificação do retorno esperado a longo
        prazo. Por outro lado, o julgamento imparcial das eventualidades
        facilita a criação dos modos de operação convencionais.
      </Text>
      <CommentActions />
    </Container>
  );
};

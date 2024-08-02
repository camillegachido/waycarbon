import { Layout } from '../layout';
import { HeaderContainer, Logo } from './index.styled';

export const Header = () => {
  return (
    <HeaderContainer>
      <Layout>
        <Logo>Blogging</Logo>
      </Layout>
    </HeaderContainer>
  );
};

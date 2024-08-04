import { Outlet } from 'react-router-dom';
import { Header, Layout } from '../components';

export const BlogLayout = () => {
  return (
    <main>
      <Header />
      <Layout>
        <Outlet />
      </Layout>
    </main>
  );
};

import { Outlet } from 'react-router-dom';
import { Header } from '../components';

export const BlogLayout = () => {
  return (
    <main>
      <Header />
      <Outlet />
    </main>
  );
};

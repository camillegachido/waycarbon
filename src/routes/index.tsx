import { createBrowserRouter } from 'react-router-dom';
import { BlogPage } from '../pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <BlogPage />,
  },
]);

export default router;

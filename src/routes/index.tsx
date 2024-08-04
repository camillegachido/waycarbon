import { createBrowserRouter } from 'react-router-dom';
import { BlogPage } from '../pages';
import { BlogLayout } from '../layouts';

const router = createBrowserRouter([
  {
    path: '/',
    element: <BlogLayout />,
    children: [{ path: '/', element: <BlogPage /> }],
  },
]);

export default router;

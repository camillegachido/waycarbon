import { Header, Layout } from '../../components';
import { Loader } from '../../components/common/loader';
import { usePost } from './hook';

export const BlogPage = () => {
  const { isLoading, post } = usePost();

  return (
    <>
      <Header />
      <Layout>{isLoading ? <Loader /> : <div>{post?.title}</div>}</Layout>
    </>
  );
};

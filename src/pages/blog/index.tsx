import { Loader } from '../../components/common/loader';
import { usePost } from './hook';

export const BlogPage = () => {
  const { isLoading, post } = usePost();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <div>{post?.title}</div>
    </>
  );
};

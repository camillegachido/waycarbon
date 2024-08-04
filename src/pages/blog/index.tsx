import { Layout } from '../../components';
import { Loader } from '../../components/common/loader';
import {
  BlogBanner,
  BlogComments,
  BlogContent,
  BlogHeader,
} from './components';
import { usePost } from './hook';
import { CenterLoader } from './index.styled';

export const BlogPage = () => {
  const { isLoading, post } = usePost();

  if (isLoading) {
    return (
      <CenterLoader>
        <Loader />
      </CenterLoader>
    );
  }

  if (!post) return <span>Post not found</span>;

  return (
    <article>
      <BlogBanner />
      <Layout>
        <BlogHeader post={post} />
        <BlogContent content={post.content} />
        <BlogComments initialComments={post.comments} />
      </Layout>
    </article>
  );
};

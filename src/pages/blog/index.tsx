import { Layout } from '../../components';
import { Loader } from '../../components/common/loader';
import {
  BlogBanner,
  BlogComments,
  BlogContent,
  BlogHeader,
  BlogUserModal,
} from './components';
import { usePost } from './hook';
import { CenterLoader } from './index.styled';

export const BlogPage = () => {
  const { isLoading, post, selectedUser, onAuthorClick, onDeselectUser } =
    usePost();

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
        <BlogHeader post={post} onAuthorClick={onAuthorClick} />
        <BlogContent content={post.content} />
        <BlogComments
          initialComments={post.comments}
          onAuthorClick={onAuthorClick}
        />
        {selectedUser && (
          <BlogUserModal visitedUser={selectedUser} onClose={onDeselectUser} />
        )}
      </Layout>
    </article>
  );
};

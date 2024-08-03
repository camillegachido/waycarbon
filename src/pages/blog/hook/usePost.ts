import { useEffect, useState } from 'react';
import { NestedPost } from '../../../common/types/posts';
import { GetPostUseCase } from '../../../usecase';

export const usePost = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [post, setPost] = useState<NestedPost | null>(null);

  useEffect(() => {
    setIsLoading(true);
    new GetPostUseCase()
      .execute()
      .then((data) => {
        setPost(data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return { isLoading, post };
};

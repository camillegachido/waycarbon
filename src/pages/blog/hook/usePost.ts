import { useEffect, useState } from 'react';
import { NestedPost } from '../../../common/types/posts';
import { GetPostUseCase } from '../../../usecase';
import { ApiGenericUser } from '../../../common/types/user';

export const usePost = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [post, setPost] = useState<NestedPost | null>(null);
  const [selectedUser, setSelectedUser] = useState<ApiGenericUser | null>(null);

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

  const onAuthorClick = (author: ApiGenericUser) => {
    setSelectedUser(author);
  };

  const onDeselectUser = () => {
    setSelectedUser(null);
  };

  return { isLoading, post, onAuthorClick, selectedUser, onDeselectUser };
};

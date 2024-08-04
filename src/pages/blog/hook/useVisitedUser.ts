import { useEffect, useState } from 'react';
import { GetUserUseCase } from '../../../usecase';
import { UserWithFriends } from '../../../common/types/user';

export const useVisitedUser = (id: number) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<UserWithFriends | null>(null);

  useEffect(() => {
    setIsLoading(true);
    new GetUserUseCase()
      .execute(id)
      .then((data) => {
        setUser(data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return { isLoading, user };
};

import { useContext, useEffect, useState } from 'react';
import { GetUserUseCase } from '../../../usecase';
import { UserWithFriends } from '../../../common/types/user';
import { AuthContext } from '../../../contexts/auth';

export const useVisitedUser = (id: number) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<UserWithFriends | null>(null);
  const { user: loggedUser } = useContext(AuthContext);

  useEffect(() => {
    setIsLoading(true);
    new GetUserUseCase()
      .execute(id)
      .then((data) => {
        setUser({
          ...data,
          friends: data.friends.filter((friend) =>
            loggedUser.friendIds.includes(friend.id)
          ),
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const isFollowed = loggedUser.friendIds.includes(id);

  return { isLoading, user, isFollowed };
};

import { GenericUser, User, UserWithFriends } from '../../../common/types/user';

export const addFriendsToUser = (
  users: User[],
  user: User
): UserWithFriends => {
  const friends = users
    .filter((u) => user.friendIds.includes(u.id))
    .map((u) => ({ id: u.id, username: u.username })) as GenericUser[];

  return { ...user, friends };
};

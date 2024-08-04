import {
  ApiGenericUser,
  GenericUser,
  User,
  UserWithFriends,
} from '../../../common/types/user';
import { avatarUrls } from '../../constants/avatar';

export const addFriendsToUser = (
  users: User[],
  user: User
): UserWithFriends => {
  const friends = users
    .filter((u) => user.friendIds.includes(u.id))
    .map((u) => ({ id: u.id, username: u.username })) as GenericUser[];

  return { ...user, friends };
};

export const addAvatarToUser = <T extends ApiGenericUser>(user: T) => {
  const avatar_url = avatarUrls[user.id.toString()];
  if (!avatarUrls) {
    return avatarUrls['1'];
  }

  return { ...user, avatar_url };
};

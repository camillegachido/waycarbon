import {
  ApiGenericUser,
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
    .map((u) => {
      const user = addAvatarToUser(u);
      return {
        id: user.id,
        username: user.username,
        avatar_url: user.avatar_url,
      };
    });

  return { ...user, friends };
};

export const addAvatarToUser = <T extends ApiGenericUser>(
  user: T
): T & { avatar_url: string } => {
  const avatar_url = avatarUrls[user.id.toString()];
  if (!avatarUrls) {
    return { ...user, avatar_url: avatarUrls['1'] };
  }

  return { ...user, avatar_url };
};

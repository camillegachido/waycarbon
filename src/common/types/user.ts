import { SimplePost } from './posts';

export interface GenericUser {
  id: number;
  username: string;
}

export interface User extends GenericUser {
  memberSince: string;
  friendIds: number[];
  posts: SimplePost[];
}

export interface UserWithFriends extends User {
  friends: GenericUser[];
}

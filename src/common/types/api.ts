import { ApiPost } from './posts';
import { User } from './user';

export interface DataBase {
  post: ApiPost;
  users: User[];
}

export interface GetResponse<T> {
  data: T;
}

export interface Post<T> {
  url: string;
  data: T;
}

export interface Error {
  error: string;
}

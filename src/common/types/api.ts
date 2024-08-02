import { ApiPost } from './posts';
import { User } from './user';

export interface DataBase {
  post: ApiPost;
  users: User[];
}

export interface Post<T> {
  url: string;
  data: T;
}

import { GenericUser } from './user';

export interface SimplePost {
  id: number;
  title: string;
  subtitle: string;
  content: string;
}

export interface DetailedPost<T> extends SimplePost {
  timestamp: string;
  author: GenericUser;
  comments: T[];
}

export interface CommentReference {
  id: number;
}

export interface ApiComment {
  id: number;
  respondsTo: CommentReference | null;
  author: GenericUser;
  timestamp: string;
  content: string;
}

export interface NestedComment {
  id: number;
  author: GenericUser;
  content: string;
  replies: NestedComment[];
}

export type ApiPost = DetailedPost<ApiComment>;
export type NestedPost = DetailedPost<NestedComment>;

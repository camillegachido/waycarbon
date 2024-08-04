import { ApiGenericUser, GenericUser } from './user';

export interface SimplePost {
  id: number;
  title: string;
  subtitle: string;
  content: string;
}

export interface DetailedPost<CommentType, AuthorType> extends SimplePost {
  timestamp: string;
  author: AuthorType;
  comments: CommentType[];
}

export interface CommentReference {
  id: number;
}

export interface ApiComment {
  id: number;
  respondsTo: CommentReference | null;
  author: ApiGenericUser;
  timestamp: string;
  content: string;
}

export interface NestedComment {
  id: number;
  author: ApiGenericUser;
  content: string;
  timestamp: string;
  replies: NestedComment[];
}

export type ApiPost = DetailedPost<ApiComment, ApiGenericUser>;
export type NestedPost = DetailedPost<NestedComment, GenericUser>;

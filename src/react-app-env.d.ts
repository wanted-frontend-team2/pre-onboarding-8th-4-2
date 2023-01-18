/// <reference types="react-scripts" />

type URL = {
  hash: string;
  host: string;
  hostname: string;
  href: string;
  readonly origin: string;
  password: string;
  pathname: string;
  port: string;
  protocol: string;
  search: string;
  username: string;
  toString(): string;
};

type CommentItemType = {
  id: string;
  profile_url: string;
  author: string;
  content: string;
  createdAt: string;
};

type CommentType = {
  comments: CommentItemType[] | [];
  page: number;
};

type CommentItemPropsType = {
  comment: CommentItemType;
};

type DeleteItemPropsType = {
  id: string;
};

type PagePropsType = {
  numComment: number;
  limit: number;
};

type getPropsType = {
  page: number;
  limit: number;
};

export type CommentItemType = {
  id: number;
  profile_url: string;
  author: string;
  content: string;
  createdAt: string;
};

export interface CommentState {
  comments: CommentItemType[];
  currentPage: number;
  inputValues: InputValues;
  totalPage: number;
  currentSection: number;
  totalSection: number;
  pageCount: number;
  firstPage: number;
  lastPage: number;
  buttonDisabled: boolean;
}

export type CommentItemPropsType = {
  comment: CommentItemType;
  setIsEdit: (boolean: boolean) => void;
  setEditItem: ({ id: number, comment: CommentItemType }) => void;
};

export type DeltePropsType = {
  id: number;
};

export type UpdatePropsType = {
  editItem: CommentItemType;
  setIsEdit: (prev: boolean) => void;
};

export type UpdateDataType = {
  id: number;
  comment: CommentItemType;
};

export type CommentsPropsType = {
  onSetIsEdit: (prev: boolean) => void;
  onSetEditItem: {
    id: number;
    comment: CommentItemType;
  };
};

export type EditItemType = {
  id: number;
  comment: CommentItemType;
};

export type InputValue = {
  [key: string]: string | number;
  id: number;
  author: string;
  profile_url: string;
  content: string;
  createdAt: string;
};

export type CommentItemType = {
  id: number;
  profile_url: string;
  author: string;
  content: string;
  createdAt: string;
};

export type CommentType = {
  comments: CommentItemType[];
};

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

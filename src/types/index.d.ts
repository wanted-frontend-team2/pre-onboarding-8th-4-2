export type CommentItemType = {
  id: string;
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
  setEditItem: ({ id: string, comment: CommentItemType }) => void;
};

export type DeltePropsType = {
  id: string;
};

export type UpdatePropsType = {
  editItem: CommentItemType;
  setIsEdit: (prev: boolean) => void;
};

export type UpdateDataType = {
  id: string;
  comment: CommentItemType;
};

export type CommentsPropsType = {
  onSetIsEdit: (prev: boolean) => void;
  onSetEditItem: {
    id: string;
    comment: CommentItemType;
  };
};

export type EditItemType = {
  id: string;
  comment: CommentItemType;
};

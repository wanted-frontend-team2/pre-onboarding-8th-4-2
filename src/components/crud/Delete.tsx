import { useAppDispatch } from "../../store/hooks";

import { deleteCommentData } from "../../store/comment/comment-actions";

const Delete = ({ id }: DeleteItemPropsType) => {
  const dispatch = useAppDispatch();

  const deleteHandler = () => {
    dispatch(deleteCommentData(id));
  };

  return (
    <button onClick={deleteHandler} className="p-1 m-1 border rounded">
      Delete
    </button>
  );
};

export default Delete;

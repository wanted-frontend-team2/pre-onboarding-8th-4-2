import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store/index';

import { deleteCommentData } from '../store/comment/commentActions';
import { DeltePropsType } from '../types/index';

function CommentDelete({ id }: DeltePropsType) {
  const dispatch = useDispatch<AppDispatch>();

  const deleteHandler = () => {
    dispatch(deleteCommentData(id));
  };

  return (
    <button type="button" onClick={deleteHandler}>
      삭제
    </button>
  );
}

export default CommentDelete;

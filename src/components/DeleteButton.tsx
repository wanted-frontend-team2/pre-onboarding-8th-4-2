import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store/index';

import { actions } from '../store/comment/commentActions';
import { DeltePropsType } from '../types/index';

function CommentDelete({ id }: DeltePropsType) {
  const dispatch = useDispatch<AppDispatch>();

  const deleteHandler = () => {
    dispatch(actions.deleteCommentData(id));
  };

  return (
    <button type="button" onClick={deleteHandler}>
      삭제
    </button>
  );
}

export default CommentDelete;

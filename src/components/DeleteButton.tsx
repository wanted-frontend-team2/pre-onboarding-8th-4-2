import { useDispatch, useSelector } from 'react-redux';
import disableButton from 'src/service/disableButton';
import { AppDispatch, RootState } from '../store/index';

import { actions } from '../store/comment/commentActions';
import { DeltePropsType } from '../types/index';

function CommentDelete({ id }: DeltePropsType) {
  const dispatch = useDispatch<AppDispatch>();
  const isButtonDisabled = useSelector(
    (state: RootState) => state.comment.buttonDisabled,
  );
  const deleteHandler = () => {
    dispatch(actions.deleteCommentData(id));
    disableButton(dispatch);
  };

  return (
    <button type="button" onClick={deleteHandler} disabled={isButtonDisabled}>
      삭제
    </button>
  );
}

export default CommentDelete;

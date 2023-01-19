import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch, RootState } from 'src/store';
import { actions } from 'src/store/comment/commentActions';
import { DeltePropsType } from 'src/types';
import disableButton from 'src/service/disableButton';

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

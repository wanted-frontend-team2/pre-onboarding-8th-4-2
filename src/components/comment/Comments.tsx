import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch, RootState } from 'src/store';
import { actions } from 'src/store/comment/commentActions';
import { getComments } from 'src/store/comment/commentSlice';
import { CommentItemType } from 'src/types';
import PageList from 'src/components/PageList';

import CommentItem from './CommentItem';
import CommentForm from './CommentForm';

function Comments() {
  const dispatch = useDispatch<AppDispatch>();
  const comments = useSelector(getComments);
  const currentPage = useSelector(
    (state: RootState) => state.comment.currentPage,
  );

  useEffect(() => {
    dispatch(actions.getCommentData());
    dispatch(actions.fetchCommentsByPage(currentPage));
  }, [currentPage, dispatch]);

  return (
    <>
      {comments.map((comment: CommentItemType) => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
      <PageList />
      <CommentForm />
    </>
  );
}

export default Comments;

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch, RootState } from '../../store/index';
import { actions } from '../../store/comment/commentActions';
import { getComments } from '../../store/comment/commentSlice';
import { CommentItemType } from '../../types/index';

import CommentItem from './CommentItem';
import PageList from './PageList';
import Create from '../crud/Create';
import Update from '../crud/Update';

function Comments() {
  const dispatch = useDispatch<AppDispatch>();
  const comments = useSelector(getComments);
  const currentPage = useSelector(
    (state: RootState) => state.comment.currentPage,
  );

  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [editItem, setEditItem] = useState<any>({
    id: 0,
    comment: {},
  });

  useEffect(() => {
    dispatch(actions.getCommentData());
    dispatch(actions.fetchCommentsByPage(currentPage));
  }, [currentPage, dispatch]);

  return (
    <>
      {comments.map((comment: CommentItemType) => (
        <CommentItem
          key={Math.random() * 100}
          comment={comment}
          setIsEdit={setIsEdit}
          setEditItem={setEditItem}
        />
      ))}
      <PageList />
      {isEdit && <Update editItem={editItem.comment} setIsEdit={setIsEdit} />}
      {!isEdit && <Create />}
    </>
  );
}

export default Comments;

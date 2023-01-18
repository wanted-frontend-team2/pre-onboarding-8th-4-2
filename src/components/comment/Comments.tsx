import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch } from '../../store/index';
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

  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [editItem, setEditItem] = useState<any>({
    id: 0,
    comment: {},
  });

  useEffect(() => {
    dispatch(actions.getCommentData());
  }, [dispatch]);

  return (
    <>
      {comments.map((comment: CommentItemType) => (
        <CommentItem
          key={comment.id}
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

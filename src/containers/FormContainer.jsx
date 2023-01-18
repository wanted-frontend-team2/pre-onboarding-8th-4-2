import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Form from '../components/Form';
import { createComment, updateComment } from '../redux/action/type';

function FormContainer() {
  const { loading, data, error } = useSelector(state => state.comments.comment);
  const currentPage = useSelector(state => state.comments.currentPage);

  const dispatch = useDispatch();

  const onCreate = comment => dispatch(createComment(comment));
  const onUpdate = comment => dispatch(updateComment(comment));

  if (loading) return <div>로딩중</div>;
  if (!data) return null;
  if (error) return <div>에러 발생</div>;

  return (
    <Form
      comments={data}
      onCreate={onCreate}
      onUpdate={onUpdate}
      currentPage={currentPage}
    />
  );
}

export default FormContainer;

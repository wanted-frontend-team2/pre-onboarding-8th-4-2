import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { getComments, pageComments } from '../redux/action/type';

function Form({ onCreate, onUpdate, comments, currentPage }) {
  const dispatch = useDispatch();

  const initialValues = {
    profile_url: '',
    author: '',
    content: '',
    createdAt: '',
  };

  const [values, setValues] = useState(comments || initialValues);

  const onChangeValues = e => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    if (comments.length === 0) {
      onCreate(values).then(() => {
        dispatch(getComments());
        dispatch(pageComments(1));
      });
    } else {
      onUpdate(values).then(() => {
        dispatch(getComments());
        dispatch(pageComments(currentPage));
      });
    }
    setValues(initialValues);
  };

  return (
    <FormStyle>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="profile_url"
          placeholder="https://picsum.photos/id/1/50/50"
          required
          onChange={onChangeValues}
          value={values.profile_url}
        />
        <br />
        <input
          type="text"
          name="author"
          placeholder="작성자"
          required
          onChange={onChangeValues}
          value={values.author}
        />
        <br />
        <textarea
          name="content"
          placeholder="내용"
          required
          onChange={onChangeValues}
          value={values.content}
        />
        <br />
        <input
          type="text"
          name="createdAt"
          placeholder="2023-01-18"
          required
          onChange={onChangeValues}
          value={values.createdAt}
        />
        <br />
        <button type="submit">등록</button>
      </form>
    </FormStyle>
  );
}

export default Form;

const FormStyle = styled.div`
  & > form > textarea {
    padding: 5px 1%;
    width: 98%;
    height: 50px;
  }

  & > form > input[type='text'] {
    padding: 5px 1%;
    width: 98%;
    margin-bottom: 10px;
  }

  & > form > button {
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
    border: 1px solid lightgray;
    cursor: pointer;
  }
`;

import { ChangeEvent, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { createCommentData } from 'src/store/comment/commentActions';
import { CommentItemType } from 'src/types';
import { AppDispatch } from '../../store/index';

const FormStyle = styled.form`
  & {
    padding: 0 10px;
    margin-bottom: 50px;
  }
  & > textarea {
    padding: 5px 1%;
    width: 98%;
    height: 50px;
  }
  & > input[type='text'] {
    padding: 5px 1%;
    width: 98%;
    margin-bottom: 10px;
  }
  & > button {
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
    border: 1px solid lightgray;
    cursor: pointer;
  }
`;

function CommentForm() {
  const dispatch = useDispatch<AppDispatch>();
  const date = new Date().toISOString();

  const [inputValue, setInputValue] = useState<CommentItemType>({
    id: date,
    author: '',
    content: '',
    createdAt: date.slice(0, 10),
    profile_url: '',
  });

  const inputValueHandler = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    dispatch(createCommentData(inputValue));
  };

  return (
    <FormStyle>
      <input
        type="text"
        name="profile_url"
        placeholder="https://picsum.photos/id/1/50/50"
        required
        value={inputValue.profile_url}
        onChange={inputValueHandler}
      />
      <input
        type="text"
        name="author"
        placeholder="작성자"
        value={inputValue.author}
        onChange={inputValueHandler}
      />
      <textarea
        name="content"
        placeholder="내용"
        required
        value={inputValue.content}
        onChange={inputValueHandler}
      />
      <input
        type="text"
        name="createdAt"
        placeholder="2020-05-30"
        required
        value={inputValue.createdAt}
        onChange={inputValueHandler}
      />
      <button type="submit" onClick={submitHandler}>
        등록
      </button>
    </FormStyle>
  );
}

export default CommentForm;

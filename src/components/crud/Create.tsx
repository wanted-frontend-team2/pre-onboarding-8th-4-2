import { ChangeEvent, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { CommentItemType } from 'src/types';
import { actions } from '../../store/comment/commentActions';
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

function Create() {
  const dispatch = useDispatch<AppDispatch>();
  const date = new Date().toISOString();

  const regex = /[^0-9]/g;
  const numId = Number(date.replace(regex, ''));

  const [inputValue, setInputValue] = useState<CommentItemType>({
    id: numId,
    author: '',
    content: '',
    createdAt: '',
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

    dispatch(actions.createCommentData(inputValue));

    setInputValue({
      id: numId,
      author: '',
      content: '',
      createdAt: '',
      profile_url: '',
    });
  };

  return (
    <FormStyle>
      <input
        type="text"
        name="profile_url"
        placeholder="프로필 사진으로 쓰일 이미지 링크를 넣어주세요."
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
        placeholder={date.slice(0, 10)}
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

export default Create;

import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { CommentItemType, UpdatePropsType } from 'src/types';
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

function CommentUpdate({ setIsEdit, editItem }: UpdatePropsType) {
  const dispatch = useDispatch<AppDispatch>();

  const [inputValue, setInputValue] = useState<CommentItemType>(editItem);

  useEffect(() => {
    setInputValue(editItem);
  }, [editItem]);

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

    dispatch(
      actions.updateCommentData({ id: editItem.id, comment: inputValue }),
    );
    setInputValue({
      id: 0,
      author: '',
      content: '',
      createdAt: '',
      profile_url: '',
    });
    setIsEdit(false);
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

export default CommentUpdate;

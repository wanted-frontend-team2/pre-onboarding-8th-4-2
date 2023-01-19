import { ChangeEvent, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import {
  setInputValues,
  resetInputValues,
} from 'src/store/comment/commentSlice';
import { AppDispatch, RootState } from 'src/store';
import { actions } from 'src/store/comment/commentActions';
import { INPUTS } from 'src/constants';
import disableButton from 'src/service/disableButton';

const FormStyle = styled.form`
  textarea {
    width: 100%;
    padding: 5px;
    height: 50px;
    border-radius: 5px;
    border: 1px solid #ddd;
    resize: none;
    &:focus {
      outline: none;
    }
  }
  input[type='text'] {
    width: 100%;
    padding: 5px;
    border-radius: 5px;
    margin-bottom: 4px;
    border: 1px solid #ddd;
    &:focus {
      outline: none;
    }
  }
  button {
    margin-top: 5px;
    width: 100%;
    border-radius: 5px;
    border: none;
    padding: 10px 0;
    background: #ececf9;
    cursor: pointer;
    transition: 0.2s;
    &:hover {
      background: #c4c8ff;
    }
  }
`;

function CommentForm() {
  const dispatch = useDispatch<AppDispatch>();
  const inputValues = useSelector(
    (state: RootState) => state.comment.inputValues,
  );
  const isButtonDisabled = useSelector(
    (state: RootState) => state.comment.buttonDisabled,
  );

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    dispatch(setInputValues({ name: e.target.name, value: e.target.value }));
  };

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();

    disableButton(dispatch);
    if (inputValues.id === -1) dispatch(actions.createCommentData(inputValues));
    else dispatch(actions.updateCommentData(inputValues));
    dispatch(resetInputValues());
  };

  return (
    <FormStyle onSubmit={submitHandler}>
      {INPUTS.map(input =>
        input.name === 'content' ? (
          <textarea
            onChange={handleChange}
            key={input.name}
            value={inputValues[input.name]}
            className="input"
            {...input}
            required
          />
        ) : (
          <input
            type="text"
            onChange={handleChange}
            value={inputValues[input.name]}
            key={input.name}
            className="input"
            {...input}
            required={input.name === 'author'}
          />
        ),
      )}
      <button type="submit" disabled={isButtonDisabled}>
        등록
      </button>
    </FormStyle>
  );
}

export default CommentForm;

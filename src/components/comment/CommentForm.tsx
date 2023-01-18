import { ChangeEvent, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import {
  setInputValues,
  resetInputValues,
} from 'src/store/comment/commentSlice';
import disableButton from 'src/service/disableButton';
import { actions } from '../../store/comment/commentActions';
import { AppDispatch, RootState } from '../../store/index';
import { INPUTS } from '../../constants/index';

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
    width: 100%;
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

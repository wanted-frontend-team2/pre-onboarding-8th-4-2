import { ChangeEvent, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { setInputValues } from 'src/store/comment/commentSlice';
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
  const inputValues = useSelector(
    (state: RootState) => state.comment.inputValues,
  );

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    dispatch(setInputValues({ name: e.target.name, value: e.target.value }));
  };

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    if (inputValues.id < 0) dispatch(actions.createCommentData(inputValues));
    else dispatch(actions.updateCommentData(inputValues));
  };

  return (
    <FormStyle>
      {INPUTS.map(input =>
        input.name === 'content' ? (
          <textarea
            onChange={handleChange}
            key={input.name}
            value={inputValues[input.name]}
            className="input"
            {...input}
          />
        ) : (
          <input
            onChange={handleChange}
            value={inputValues[input.name]}
            key={input.name}
            className="input"
            {...input}
          />
        ),
      )}
      <button type="submit" onClick={submitHandler}>
        등록
      </button>
    </FormStyle>
  );
}

export default Create;

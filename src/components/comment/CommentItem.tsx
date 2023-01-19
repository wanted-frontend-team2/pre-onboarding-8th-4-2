import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import disableButton from 'src/service/disableButton';
import CommentDelete from 'src/components/DeleteButton';
import { editComment } from 'src/store/comment/commentSlice';
import { RootState } from 'src/store';

const CommentWrap = styled.div`
  padding-top: 25px;
`;

const CommentBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Profile = styled.div`
  display: flex;
  img {
    margin-top: 5px;
    vertical-align: middle;
    margin-right: 10px;
    border-radius: 50%;
    width: 30px;
    height: 30px;
  }
  span {
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 0.5px;
  }
`;

const CreatedAt = styled.div`
  margin-top: 7px;
  font-size: 12px;
  color: #999;
`;

const Content = styled.div`
  margin: 20px 0 0 35px;
  padding-bottom: 25px;
  border-bottom: 1px solid #f1f1f1;
`;

const Buttons = styled.div`
  flex: none;
  margin-left: 10px;
  button {
    margin-right: 10px;
    padding: 5px 8px;
    border-radius: 5px;
    border: none;
    background: #f8f9fe;
    color: #888;
    font-size: 12px;
    transition: 0.2s;
    cursor: pointer;
    &:hover {
      background: #f3f5ff;
      color: #222;
    }
  }
`;

function CommentItem({ comment }: any) {
  const dispatch = useDispatch();
  const isButtonDisabled = useSelector(
    (state: RootState) => state.comment.buttonDisabled,
  );
  const updateHandler = () => {
    dispatch(editComment(comment.id));
    disableButton(dispatch);
  };

  return (
    <CommentWrap>
      <CommentBox>
        <Profile>
          <img src={comment.profile_url} alt="profile_url" />
          <div>
            <span>{comment.author}</span>
            <CreatedAt>{comment.createdAt}</CreatedAt>
          </div>
        </Profile>

        <Buttons>
          <button
            type="button"
            onClick={updateHandler}
            disabled={isButtonDisabled}
          >
            수정
          </button>
          <CommentDelete id={comment.id} />
        </Buttons>
      </CommentBox>
      <Content>{comment.content}</Content>
    </CommentWrap>
  );
}

export default CommentItem;

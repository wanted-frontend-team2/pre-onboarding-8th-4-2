import { useDispatch } from 'react-redux';
import { editComment } from 'src/store/comment/commentSlice';
import styled from 'styled-components';
import CommentDelete from './DeleteButton';

const Comment = styled.div`
  padding: 7px 10px;
  text-align: left;

  & > img {
    vertical-align: middle;
    margin-right: 10px;
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }
`;

const CreatedAt = styled.div`
  float: right;
  vertical-align: middle;
`;

const Content = styled.div`
  margin: 10px 0;
`;

const Button = styled.div`
  text-align: right;
  margin: 10px 0;
  & > button {
    margin-right: 10px;
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
    border: 1px solid lightgray;
    cursor: pointer;
  }
`;

function CommentItem({ comment }: any) {
  const dispatch = useDispatch();
  return (
    <Comment key={comment.id}>
      <img src={comment.profile_url} alt="profile_url" />
      {comment.author}
      <CreatedAt>{comment.createdAt}</CreatedAt>
      <Content>{comment.content}</Content>
      <Button>
        <button type="button" onClick={() => dispatch(editComment(comment.id))}>
          수정
        </button>
        <CommentDelete id={comment.id} />
      </Button>

      <hr />
    </Comment>
  );
}

export default CommentItem;

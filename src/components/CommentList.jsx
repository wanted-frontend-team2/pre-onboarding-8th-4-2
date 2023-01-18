import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { getComments, pageComments } from '../redux/action/type';

function CommentList({ comments, onDelete, onUpdateComment }) {
  const dispatch = useDispatch();

  const handleComment = comment => {
    onUpdateComment(comment.id);
  };

  const handleDelete = comment => {
    if (window.confirm('댓글을 삭제하시겠습니까?')) {
      onDelete(comment).then(() => {
        dispatch(getComments());
        dispatch(pageComments(1));
      });
    }
  };

  return comments.map(comment => (
    <Comment key={comment.id}>
      <img src={comment.profile_url} alt="" />
      {comment.author}
      <CreatedAt>{comment.createdAt}</CreatedAt>
      <Content>{comment.content}</Content>
      <Buttons>
        <button type="button" onClick={() => handleComment(comment)}>
          수정
        </button>
        <button type="button" onClick={() => handleDelete(comment)}>
          삭제
        </button>
      </Buttons>
      <hr />
    </Comment>
  ));
}

export default CommentList;

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

const Buttons = styled.div`
  text-align: right;
  margin: 10px 0;
  & > button {
    margin-right: 10px;
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
    background-color: white;
    border: 1px solid lightgray;
    cursor: pointer;
  }
`;

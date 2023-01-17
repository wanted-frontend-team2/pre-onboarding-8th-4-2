import React from 'react';

// 임시 데이터 입니다. 코드 작성시 data 부분을 지워주세요
const data = [
  {
    id: 1,
    profile_url: 'https://picsum.photos/id/1/50/50',
    author: 'abc_1',
    content: 'UI 테스트는 어떻게 진행하나요',
    createdAt: '2020-05-01',
  },
];

function CommentList() {
  const list = data.map((comment, key) => (
    <div className="py-2 px-2.5 text-left" key={key}>
      <img
        src={comment.profile_url}
        alt=""
        className="align-middle	mr-2.5 rounded-full	w-12 h-12"
      />
      {comment.author}
      <div className="float-right	align-middle">{comment.createdAt}</div>
      <div className="my-2.5">{comment.content}</div>
      <div className="text-right my-2.5">
        <a className="btn">수정</a>
        <a className="btn">삭제</a>
      </div>
      <hr />
    </div>
  ));
  return <>{list}</>;
}

export default CommentList;

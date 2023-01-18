import React from 'react';

function PageList() {
  const pageArray = Array(0);

  pageArray.push(
    // 임시로 페이지 하나만 설정했습니다.
    <button
      key="1"
      className="button text-base leading-normal mr-0.5 active:bg-slate-400	active:text-white"
    >
      1
    </button>,
  );

  return <div className="mb-5 text-center">{pageArray}</div>;
}

export default PageList;

import React from 'react';
import styled from 'styled-components';

function PageList({ totalComments, onPage, currentPage }) {
  const pageRowSize = 4;
  const pageEnd = Math.ceil(totalComments / pageRowSize);
  const pageArray = [];

  for (let i = 1; i <= pageEnd; i += 1) {
    pageArray.push(i);
  }

  return (
    <PageListStyle>
      {pageArray.map(num => (
        <Page
          key={num}
          onClick={() => onPage(num)}
          active={currentPage === num}
        >
          {num}
        </Page>
      ))}
    </PageListStyle>
  );
}

export default PageList;

const PageListStyle = styled.div`
  margin-bottom: 20px;
  text-align: center;
`;

const Page = styled.button`
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid lightgray;
  outline: none;
  background-color: white;
  cursor: pointer;

  ${({ active }) =>
    active &&
    `
        background: gray;
        color: #fff;
  `}

  margin-right: 3px;
`;

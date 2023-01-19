import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { RootState } from 'src/store';
import { setCurrentPage, setPageSection } from 'src/store/comment/commentSlice';

const PageListStyle = styled.div`
  margin-bottom: 20px;
  text-align: center;
`;

type PageProps = {
  active: boolean;
};

const Page = styled.button<PageProps>`
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid lightgray;
  ${({ active }) =>
    active &&
    `
        background: gray;
        color: #fff;
  `}
  margin-right: 3px;
`;

function Pages() {
  const dispatch = useDispatch();
  const totalPage = useSelector((state: RootState) => state.comment.totalPage);
  const firstPage = useSelector((state: RootState) => state.comment.firstPage);
  const lastPage = useSelector((state: RootState) => state.comment.lastPage);
  const currentSection = useSelector(
    (state: RootState) => state.comment.currentSection,
  );
  const totalSection = useSelector(
    (state: RootState) => state.comment.totalSection,
  );
  const currentPage = useSelector(
    (state: RootState) => state.comment.currentPage,
  );

  const pageButtons = [...Array(totalPage + 1)].map((_, i) => i);

  return (
    <PageListStyle>
      <button
        type="button"
        disabled={currentSection === 1}
        onClick={() => dispatch(setPageSection('prev'))}
      >{`<`}</button>
      {pageButtons.slice(firstPage, lastPage + 1).map(pageNumber => (
        <Page
          active={currentPage === pageNumber}
          onClick={() => dispatch(setCurrentPage(pageNumber))}
          key={Math.random() * 1000}
        >
          {pageNumber}
        </Page>
      ))}
      <button
        type="button"
        disabled={currentSection >= totalSection}
        onClick={() => dispatch(setPageSection('next'))}
      >{`>`}</button>
    </PageListStyle>
  );
}

export default Pages;

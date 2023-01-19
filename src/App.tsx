import React from 'react';
import styled from 'styled-components';

import Comments from './components/comment/Comments';

const Layout = styled.div`
  width: 510px;
  padding: 30px;
  margin: 0 auto;
  background: #fff;
  border-radius: 30px;
  box-shadow: 1px 5px 14px 5px #dbd9eb;
`;

function App() {
  return (
    <Layout>
      <Comments />
    </Layout>
  );
}

export default App;

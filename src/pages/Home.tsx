import React from 'react';
import CommentList from '../components/CommentList';
import PageList from '../components/PageList';
import Form from '../components/Form';

function Home() {
  return (
    <div>
      <CommentList />
      <PageList />
      <Form />
    </div>
  );
}

export default Home;

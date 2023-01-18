import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:4000/comments/',
});

export const getCommentsAPI = async () => {
  const res = await instance.get('');
  return res.data;
};

export const getCommentIdAPI = async id => {
  const res = await instance.get(`${id}`);
  return res.data;
};

export const createCommentAPI = async commentForm => {
  const res = await instance.post('', commentForm);
  return res.data;
};

export const updateCommentAPI = async commentForm => {
  const res = await instance.put(`${commentForm.id}`, commentForm);
  return res.data;
};

export const deleteCommentAPI = async commentForm => {
  const res = await instance.delete(`${commentForm.id}`);
  return res.data;
};

export const pagingCommentAPI = async num => {
  const res = axios.get(
    `http://localhost:4000/comments?_page=${num}&_limit=4&_order=desc&_sort=id`,
  );
  return (await res).data;
};

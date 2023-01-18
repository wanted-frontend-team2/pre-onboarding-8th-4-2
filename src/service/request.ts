import axios from 'axios';
import { CommentItemType } from 'src/types';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'content-Type': 'application/json',
  },
});

const apis = {
  get: () => instance.get(`/`),
  getComments: (currentPage: number) =>
    instance.get(`/?_page=${currentPage}&_limit=4&_order=desc&_sort=createdAt`),
  create: (comment: CommentItemType) =>
    instance.post('/', {
      id: (Math.random() * 1000).toFixed(3),
      author: comment.author,
      content: comment.content,
      profile_url: comment.profile_url,
      createdAt: comment.createdAt,
    }),
  update: (id: any, comment: any) => instance.put(`/${id}`, comment),
  delete: (id: any) => instance.delete(`/${id}`),
};

export default apis;

import axios from 'axios';

import { GetCommentsParams } from 'src/constants/request.const';
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
    instance.get(`/?_page=${currentPage}`, { params: GetCommentsParams }),
  create: (comment: CommentItemType) => {
    instance.post('/', {
      author: comment.author,
      content: comment.content,
      profile_url: comment.profile_url
        ? comment.profile_url
        : process.env.REACT_APP_DAFAULT_PROFILE_URL,
      createdAt: comment.createdAt,
    });
  },
  update: (comment: CommentItemType) => instance.put(`/${comment.id}`, comment),
  delete: (id: number) => instance.delete(`/${id}`),
};

export default apis;

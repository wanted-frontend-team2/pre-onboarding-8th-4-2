import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:4000/',
});

export const apis = {
  getList: (page = 1) => instance.get(`/comments?_page=${page}&_limit=5`),
  get: (id: any) => instance.get(`./comments/${id}`),
  create: (contents: any) => instance.post('/comments', contents),
  edit: (id: any, content: any) => instance.put(`/comments/${id}`, content),
  delete: (id: any) => instance.delete(`/posts/${id}`),
};

import axios from 'axios';

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
  create: (comment: any) => instance.post('/', comment),
  update: (id: any, comment: any) => instance.put(`/${id}`, comment),
  delete: (id: any) => instance.delete(`/${id}`),
};

export default apis;

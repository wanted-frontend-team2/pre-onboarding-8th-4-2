export const DEFAULT_INPUT_VALUES = {
  id: -1,
  profile_url: '',
  author: '',
  content: '',
  createdAt: '',
};

interface Input {
  [key: string]: string;
  name: string;
  placeholder: string;
}

export const INPUTS: Input[] = [
  { name: 'profile_url', placeholder: 'https://picsum.photos/id/1/50/50' },
  { name: 'author', placeholder: '작성자' },
  { name: 'content', placeholder: '내용' },
  { name: 'createdAt', placeholder: '2022-01-17' },
];

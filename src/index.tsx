import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import store from './store';
import App from './App';
import GlobalStyle from './GlobalStyle';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(
  <StrictMode>
    <GlobalStyle />
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);

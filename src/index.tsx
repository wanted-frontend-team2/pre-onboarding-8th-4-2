import React from 'react';
import CreateDOM from 'react-dom/client';
import App from './App';
import './index.css';

const root = CreateDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

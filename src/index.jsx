import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
import { GlobalStyles } from './global-styles';
import App from './app';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
      <GlobalStyles />
      <App />
    </>
  </React.StrictMode>
);

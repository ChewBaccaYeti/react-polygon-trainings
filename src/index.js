import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'components/GlobalStyle';
import { Reader } from './components/Reader/Reader';
import './index.css';
import App from './App';
import publications from './components/publications.json';
const theme = {};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      <GlobalStyle />
      <Reader items={publications} />
    </ThemeProvider>
  </React.StrictMode>
);

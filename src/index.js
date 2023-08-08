import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@emotion/react';
import './index.css';
import { App } from 'components/App/App';
import { theme } from '/src/constants/theme';

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'modern-normalize/modern-normalize.css';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import App from './App';

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

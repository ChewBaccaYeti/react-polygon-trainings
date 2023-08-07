import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App/App';
import './index.css';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.createRoot(document.querySelector('#root')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});

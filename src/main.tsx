import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ToastProvider } from '@/components/shared';
import App from './App';
import '@/assets/css/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ToastProvider position="top-right">
        <App />
      </ToastProvider>
    </BrowserRouter>
  </React.StrictMode>
);

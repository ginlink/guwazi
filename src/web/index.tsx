import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './App';
import './index.css';
import ResetCSS from './ResetCSS';
import { ThemeProvider } from './themeProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <ResetCSS/>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

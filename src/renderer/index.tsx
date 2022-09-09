import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './App';
import ThemeProvider from './theme';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);

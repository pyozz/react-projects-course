import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from './style/globalStyle';
import AppProvider from './context';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);

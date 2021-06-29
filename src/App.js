import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import AuthProvider from './contexts/Auth';
import Routes from './Routes';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes />
        <ToastContainer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

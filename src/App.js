import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import AuthProvider from './contexts/Auth';
import Routes from './Routes';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

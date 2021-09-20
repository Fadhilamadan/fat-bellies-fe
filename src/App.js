import React from 'react';

import Navbar from './components/layout/navbar';
import Router from './router';

import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Router />
    </BrowserRouter>
  );
};

export default App;

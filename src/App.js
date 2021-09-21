import React from 'react';

import Footer from './components/layout/footer';
import Navbar from './components/layout/navbar';
import Router from './router';

import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Router />
      <Footer />
    </BrowserRouter>
  );
};

export default App;

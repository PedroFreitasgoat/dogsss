import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return <div>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
    <Footer />
    </BrowserRouter >

  </div>;
};

export default App;

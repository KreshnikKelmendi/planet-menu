import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Category from './components/category/Category';
import Navbar from './components/header/Navbar'
import Footer from './components/footer/Footer';
import MenuInHomePage from './components/category/MenuInHomePage';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Category />} />
        <Route path="/:categoryId" element={<Category />} />
        <Route path="/:categoryId/:subcategoryId" element={<Category />} />
      </Routes>
      <div className='px-5 lg:px-10'>
        <MenuInHomePage />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
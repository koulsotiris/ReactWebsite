import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import SignUp from './components/pages/SignUp';
import Features from './components/pages/Features';
import AboutUs from './components/pages/AboutUs';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/features' element={<Features/>}/>
        <Route path='/about-us' element={<AboutUs/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;


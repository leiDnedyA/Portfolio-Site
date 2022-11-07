import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Elements/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Projects from './Pages/Projects';
import SocialLinks from './Elements/SocialLinks';

function App() {
  return (
    <div className="App">
      <Navbar links={[
        { label: 'Home', destination: '/' },
        { label: 'Projects', destination: '/projects' },
        { label: 'Contact', destination: '/contact' }]} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <div className="footer">
         <a href="mailto: aydendiel@gmail.com">aydendiel@gmail.com</a> <SocialLinks />
      </div>
    </div>
  );
}

export default App;

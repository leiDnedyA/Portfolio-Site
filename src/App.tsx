import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Elements/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

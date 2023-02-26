// import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import { Navbar } from './components/Navbar';
import { Home } from './components/pages/Home';
import { Register } from './components/pages/Register';
import { Profile } from './components/pages/Profile';
import { Login } from './components/pages/Login';

export const App = () => {
  return (
    <div className="App bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/register" element={<Register />} />
        <Route path="/user/login" element={<Login />} />
        <Route path="/user/profile" element={<Profile />} />
      </Routes>
    </div>
  );
};

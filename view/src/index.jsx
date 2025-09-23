import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import CompanyHeader from './mainpage/CompanyHeader';
import Navbar from './mainpage/Navbar';
import Footer from './mainpage/Footer';
import Navbar2 from './mainpage/Navbar2';
import Navbar3 from './mainpage/Navbar3';
import RegisterUser from './user/RegisterUser';
import Home from './Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CompanyHeader />
      <Navbar />
      <Routes>
        <Route path="index.react" element={<Home />} />
        <Route path="register.react" element={<RegisterUser />} />
      </Routes>    
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);


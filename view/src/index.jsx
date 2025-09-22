import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import CompanyHeader from './mainpage/CompanyHeader';
import Navbar from './mainpage/Navbar';
import Footer from './mainpage/Footer';
import Navbar2 from './mainpage/Navbar2';
import Navbar3 from './mainpage/Navbar3';
import RegisterUser from './user/RegisterUser';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CompanyHeader />
    <Navbar />
    <RegisterUser />
    <Footer />
  </React.StrictMode>
);


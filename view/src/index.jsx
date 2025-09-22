import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import CompanyHeader from './mainpage/CompanyHeader';
import Navbar from './mainpage/Navbar';
import Footer from './mainpage/Footer';
import Navbar2 from './mainpage/Navbar2';
import Navbar3 from './mainpage/Navbar3';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CompanyHeader />
    <Navbar />
    <h1> Hello React World </h1>
    <Footer />
  </React.StrictMode>
);


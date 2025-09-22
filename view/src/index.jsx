import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HtmlImports from "./mainpage/HtmlImports";
import CompanyHeader from './mainpage/CompanyHeader';
import Navbar from './mainpage/Navbar';
import Footer from './mainpage/Footer';
import Navbar2 from './mainpage/Navbar2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HtmlImports />
    <CompanyHeader />
    <Navbar />
    <h1> Hello React World </h1>
    <Footer />
  </React.StrictMode>
);


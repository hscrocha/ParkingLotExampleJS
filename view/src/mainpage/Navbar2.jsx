import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar2(){
    return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
          <ul className="navbar-nav"> 
            <li className="nav-item">
              <NavLink to="/" className="nav-link"><span className="bi-house-fill"></span> Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="userpage" className="nav-link">Users</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="contact.html" className="nav-link">Contact</NavLink>
            </li>
            <li id="menu-admin" className="nav-item">
              <a className="nav-link" href="admin.html">Admin</a>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"><span className="bi-person-circle"></span> Account</a>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                <li id="menu-login"><NavLink className="dropdown-item" to="loginpage">Login</NavLink></li>
                <li id="menu-register"><a className="dropdown-item" href="/register.html">Register</a></li>
                <li id="menu-logout"><a className="dropdown-item" href="/logout">Logout</a></li>
              </ul>
            </li>
          </ul>    
        </div>
    </nav>
    
    );
}
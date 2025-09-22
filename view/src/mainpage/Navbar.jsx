import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar(){
    return (
<nav class="navbar navbar-expand-sm bg-dark" data-bs-theme="dark"> 
    <div class="container-fluid">
        <ul class="navbar-nav">
        <li class="nav-item">
            <a class="nav-link" href="index.jsp"><span class="bi-house-fill"></span> Home</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">My Vehicles</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Parking</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="contact.jsp">Contact</a>
        </li>
        <li id="menu-admin" class="nav-item">
            <a class="nav-link" href="admin.jsp">Admin</a>
        </li>
        </ul>
        <ul class="navbar-nav ms-auto">
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"><span class="bi-person-circle"></span> Account</a>
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                <li id="menu-login"><a class="dropdown-item" href="login.jsp">Login</a></li>
                <li id="menu-register"><a class="dropdown-item" href="register.jsp">Register</a></li>
                <li id="menu-profile"><a class="dropdown-item" href="#">Profile</a></li>
                <li id="menu-logout"><a class="dropdown-item" href="logoutServlet">Logout</a></li>
            </ul>
        </li>
        </ul>
    </div>
</nav>
    );
}
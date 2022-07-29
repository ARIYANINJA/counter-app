import React, { Component } from 'react';
const NavBar = ({totalCounters}) =>{
    return (
        <div>
           <nav className="navbar bg-light">
            <div className="container-fluid">
            <a className="navbar-brand" href="#">Navbar
            <span className='badge bg-secondary m-2'>{totalCounters}</span>
            </a>
            </div>
            </nav>
        </div>
    );
};
 
export default NavBar;
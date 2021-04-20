import React from 'react';
import logo from './assets/images/logo_red.png';

const Navbar = () =>{
    return(
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="index.html"><img className="logo" src={logo} alt="logo"/></a>
                <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a href="index.html" className="nav-link">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="about.html" className="nav-link">About</a>
                        </li>
                        <li className="nav-item">
                            <a href="products.html" className="nav-link">Products</a>
                        </li>
                    
                        <li className="nav-item">
                            <a href="contact.html" className="nav-link">Contact</a>
                        </li>
                    </ul>
                    
                </div>
        </div>
    </nav>
    )
}



export default Navbar;
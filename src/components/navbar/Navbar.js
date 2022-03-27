import React from 'react';
import {Link} from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="container-fluid navbar-container">
      <div className="row">
        <div className="col first-columns">
          <h1 className='d-flex justify-content-center'><Link to="/">Logo.</Link></h1>
        </div>
        <div className="col second-columns align-self-center">
          <ul className="nav justify-content-center">
            <li className="nav-item"><Link className='nav-link' to="/">Home</Link></li>
            <li className="nav-item"><Link className='nav-link' to="/about">About</Link></li>
            <li className="nav-item"><Link className='nav-link' to="/services">Services</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
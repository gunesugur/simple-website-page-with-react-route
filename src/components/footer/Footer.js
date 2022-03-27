import React from 'react';
import "./Footer.css";
const Footer = () => {
  return (
    <div className="container-fluid main-footer-field">

      <div className="row footer-row-field">

        <div className='col-md-4 f-line'>
          <span>© 2021 Company, Inc</span>
        </div>

        <div className='col-md-4 s-line'>
          <span className='footer-logo'>Logo.</span>
        </div>

        <div className='col-md-4 t-line'>
          <span><a href="#"><i class="fa-brands fa-twitter"></i></a></span>
          <span><a href="#"><i class="fa-brands fa-instagram"></i></a></span>
          <span><a href="#"><i class="fa-brands fa-facebook-f"></i></a></span>
        </div>

      </div>

    </div>
  )
}

export default Footer;
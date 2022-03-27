import React from 'react';
import { Link } from "react-router-dom";
import "./Card.css";
import html from "../../assets/images/Html5.svg";
import css from "../../assets/images/Css3.svg";
import js from "../../assets/images/js.svg";
import react from "../../assets/images/React.svg";
import mysql from "../../assets/images/MySql.svg";
import django from "../../assets/images/Django.svg";

const Card = () => {
  return (
    <div className="container d-flex flex-wrap flex-column">
      <h2 className="text-center card-main-header">Technologies We Us.</h2>
      <div className="row f-row">
        <div className='col-md-4 '>
          <div className="card f-card mx-auto">
            <img src={html} className="card-img-top" alt="html-img" />
            <div className="card-body">
              <h5 className="card-title">HTML5</h5>
              <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo corporis incidunt tempore quisquam...</p>
              <Link to="/html" className="btn btn-primary">More</Link>
            </div>
          </div>
        </div>
        <div className='col-md-4'>
          <div className="card f-card mx-auto">
            <img src={css} className="card-img-top" alt="css-img" />
            <div className="card-body">
              <h5 className="card-title">CSS3</h5>
              <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo corporis incidunt tempore quisquam...</p>
              <Link to="/css" className="btn btn-primary">More</Link>
            </div>
          </div>
        </div>
        <div className='col-md-4'>
          <div className="card f-card mx-auto">
            <img src={js} className="card-img-top" alt="js-img" />
            <div className="card-body">
              <h5 className="card-title">JavaScript</h5>
              <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo corporis incidunt tempore quisquam...</p>
              <Link to="/javascript" className="btn btn-primary">More</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row f-row l-row">
        <div className='col-md-4'>
          <div className="card f-card mx-auto">
            <img src={react} className="card-img-top" alt="react-img" />
            <div className="card-body">
              <h5 className="card-title">React</h5>
              <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo corporis incidunt tempore quisquam...</p>
              <Link to="/react" className="btn btn-primary">More</Link>
            </div>
          </div>
        </div>
        <div className='col-md-4'>
          <div className="card f-card mx-auto">
            <img src={mysql} className="card-img-top" alt="mysql-img" />
            <div className="card-body">
              <h5 className="card-title">MySQL</h5>
              <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo corporis incidunt tempore quisquam...</p>
              <Link to="/mysql" className="btn btn-primary">More</Link>
            </div>
          </div>
        </div>
        <div className='col-md-4'>
          <div className="card f-card mx-auto">
            <img src={django} className="card-img-top" alt="django-img" />
            <div className="card-body">
              <h5 className="card-title">Django</h5>
              <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo corporis incidunt tempore quisquam...</p>
              <Link to="/django" className="btn btn-primary">More</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card;
import React from 'react';
import "./Banner.css";
import bannerImg from "../../assets/images/teamwork.jpg"
const Banner = () => {
    return (
        <div className="container-fluid px-0">
            <div className="row mx-0">
                <img className=" img-fluid px-0 banner-img" src={bannerImg} alt="teamwork" />
                <div className="banner-content">
                    <h1 className="banner-group f-word">For Your</h1>
                    <h1 className="banner-group l-word">Dreams.</h1>
                    <div className='banner-btn-group'>
                        <button className='banner-btn f-btn'>Try It Now</button>
                        <button className='banner-btn l-btn'>Try It Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;
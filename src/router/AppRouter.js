import React from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Services from "../pages/services/Services";
import Html from "../pages/html/Html";
import Css from "../pages/css/Css";
import Javascript from "../pages/javaScript/Javascript";
import Reactt from "../pages/reactt/Reactt";
import Mysql from "../pages/mysql/Mysql";
import Django from "../pages/django/Django";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

const AppRouter = () => {

    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/html" element={<Html />} />
                <Route path="/css" element={<Css />} />
                <Route path="/javascript" element={<Javascript />} />
                <Route path="/react" element={<Reactt />} />
                <Route path="/mysql" element={<Mysql />} />
                <Route path="/django" element={<Django />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default AppRouter;
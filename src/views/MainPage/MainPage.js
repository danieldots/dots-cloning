import React from "react";
import { Link, NavLink } from 'react-router-dom';
import Header from "./components/Header/Header";
import Navbar from "./components/Header/Header";
import HeroBanner from "./components/HeroBanner/HeroBanner";
import ClassCards from "./components/Class/ClassCards";
import PreClassCards from "./components/PreClass/PreClassCards";
import RequestClass from "./components/RequestClass/RequestClass";
import Footer from "./components/Footer/Footer"
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from 'react-router-dom';


const MainPage = () => {
    return( 
        <div>     
          <Header/>
          <br></br><br></br><br></br><br></br>
          <HeroBanner/>
          <ClassCards/>
          <PreClassCards/>
          <RequestClass/>
          <Footer/> 
        </div>

    )
}

export default MainPage
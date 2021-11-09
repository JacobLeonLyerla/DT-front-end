import React, { Component, Fragment } from "react";

import "../../css/index.css";

import Header from "./header";

import Nav from "./landingNav";

import About from "./landingAbout";


const Landing =()=>{ 
    return (
      <>

        <div className="App mapBackground-styles">
          <Nav  />

          <br />

          <Header />
        </div>



        <About />
      </>
    );
  
}

export default Landing;

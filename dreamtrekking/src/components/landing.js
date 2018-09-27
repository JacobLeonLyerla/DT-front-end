import React, { Fragment } from "react";
import "../css/index.css";
import Header from "./header";
import Nav from "./landingNav";
import About from "./landingAbout";
const Landing = () => {
  return (
    <Fragment>
      <div className="App mapBackground-styles">
        <Nav />
        <br />
        <Header />
      </div>
      <About />
    </Fragment>
  );
};

export default Landing;

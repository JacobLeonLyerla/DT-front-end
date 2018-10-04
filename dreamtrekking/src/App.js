import React, { Component } from "react";


import "./App.css";
import "./css/index.css";
import { Route } from "react-router-dom";

import Nav from "./components/nav"
import Landing from "./components/landing"
import Signup from"./components/signup"
import Signin from"./components/signin"
class App extends Component {
  render() {
    return (
      <div className="App">
       <Route
         exact path="/"
          render={props => <Landing/>}
        />
        <Route
          path="/dashboard"
          render={props => <Nav/>}
        />
  <Route
          path="/signup"
          render={props => <Signup/>}
        />
          <Route
          path="/signin"
          render={props => <Signin/>}
        />
      </div>
    );
  }
}

export default App;

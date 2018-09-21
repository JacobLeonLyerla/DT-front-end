import React, { Component } from "react";


import "./App.css";
import "./css/index.css";
import { Route } from "react-router-dom";

import Nav from "./components/nav"
import Landing from "./components/landing"
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

      </div>
    );
  }
}

export default App;

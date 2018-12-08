import React, { Component } from "react";
import { Row } from "reactstrap";

import "./App.css";
import "./css/index.css";
import { Route } from "react-router-dom";

import Nav from "./components/nav";
import Landing from "./components/landing";
import Signup from "./components/signup";
import Signin from "./components/signin";
import Dashboard from "./components/dashboard";
import Tags from "./components/tags";
class App extends Component {
state={
  dashboardVar:1,
  tagVar:0,

}
  columnSizer =()=>{
    let dv,tv;
    if(this.state.dashboardVar === 1){
       dv = this.state.dashboardVar -1
       tv = this.state.tagVar +1
    }else{
       dv = this.state.dashboardVar +1
        tv = this.state.tagVar-1
    }
    
   this.setState({dashboardVar:dv, tagVar:tv})
  }
  render() {
    return (
      <div className="App">
        <Route exact path="/" render={props => <Landing />} />
        {/* <Route
          path="/dashboard"
          render={props => <Nav/>}
        /> */}
        <Route path="/signup" render={props => <Signup />} />
        <Route path="/signin" render={props => <Signin />} />
        <Row>
          <Route path="/dashboard" render={props => <Dashboard columnSizer={this.columnSizer} dashboardVar={this.state.dashboardVar} />} />
          <Route exact path="/dashboard" render={props => <Tags  tagVar={this.state.tagVar}  />} />
        </Row>
      </div>
    );
  }
}

export default App;

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
import TagView from "./components/tagView"

import Tags from "./components/tags";
import logo from "./assets/logo.png";
import logoSml from "./assets/logoinit.png";
class App extends Component {
  state = {
    dashboardVar: 1,
    tagVar: 0,
    collapseIcon: "fas fa-angle-double-left",
    buttonClass: "btn",
    linkClass: "nav-links",
    logo: logo
  };
  columnSizer = () => {
    let dv, tv, icon, button, link, newLogo;
    if (this.state.dashboardVar === 1) {
      dv = this.state.dashboardVar - 1;
      tv = this.state.tagVar + 1;
      icon = "fas fa-angle-double-right";
      button = "btn-sml";
      link = "nav-sml";
      newLogo = logoSml;
    } else {
      dv = this.state.dashboardVar + 1;
      tv = this.state.tagVar - 1;
      icon = "fas fa-angle-double-left";
      button = "btn";
      link = "nav-links";
      newLogo = logo;
    }

    this.setState({
      dashboardVar: dv,
      tagVar: tv,
      collapseIcon: icon,
      buttonClass: button,
      linkClass: link,
      logo: newLogo
    });
  };
  render() {
    return (
      <div className="App">
        <Route exact path="/" render={props => <Landing />} />
        <Route path="/signup" render={props => <Signup />} />
        <Route path="/signin" render={props => <Signin />} />
        <Row>
          <Route
            path="/dashboard"
            render={props => (
              <Dashboard
                logo={this.state.logo}
                link={this.state.linkClass}
                btn={this.state.buttonClass}
                collapseIcon={this.state.collapseIcon}
                columnSizer={this.columnSizer}
                dashboardVar={this.state.dashboardVar}
              />
            )}
          />
          <Route
            exact
            path="/dashboard"
            render={props => <Tags {...props} tagVar={this.state.tagVar} />}
          />
             <Route
            exact
            path="/dashboard/:id"
            render={props => <TagView {...props} tagVar={this.state.tagVar} />}
          />
        </Row>
      </div>
    );
  }
}

export default App;

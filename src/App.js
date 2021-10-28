import React, { Component } from "react";
import { Row, Modal } from "reactstrap";
import "./App.css";
import "./css/index.css";
import { Route } from "react-router-dom";
import axios from "axios";
import Landing from "./components/preLogin/landing";
import Signup from "./components/preLogin/signup";
import Signin from "./components/preLogin/signin";
import Dashboard from "./components/dashboard/dashboard";
import Trek from "./components/dashboard/trek";
import Tags from "./components/dashboard/tags";
import logo from "./assets/logo.png";
import logoSml from "./assets/logoinit.png";
import CreatePost from "./components/dashboard/createNewPost";
import Post from "./components/dashboard/post";
import Info from "./components/preLogin/about";
import TagViewContainer from "./components/containers/tagViewContainer.component";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      dashboardVar: 1,
      tagVar: 0,
      collapseIcon: "fas fa-angle-double-left",
      buttonClass: "btn",
      linkClass: "nav-links",
      logo: logo,
      picture: {},
      count: 0,
      post: [],
      modal: false
    };


  }
  // this will call when the component is rendered
  // in turn it will call the load users and pictures methods


  // load user will call the endpoint and get back the user by id
  // that data will than be set onto state
  
  // so if you minimize the dashboard the components that are on other routes will also resize
  // I feel like this was kind of brute force, however we have to build to grow.
  // if you have any suggestion for improvement I would be very thankful.
  columnSizer = () => {

    // set variables for this function
    let dv, tv, icon, button, link, newLogo;

    // when our dashboard var is 1 and we cll this function it will
    // decrement the dashboardvar and store it into a variable
    // it will increment the tagVar and set the icon to the point right
    // the button styling will become small
    // and the link styling will be changed to small
    // and the logo wil lchange to the smaller logo that is just DT and not Dreamtrekking
    if (this.state.dashboardVar === 1) {

      dv = this.state.dashboardVar - 1;
      
      tv = this.state.tagVar + 1;

      icon = "fas fa-angle-double-right";

      button = "btn-sml";

      link = "nav-sml";

      newLogo = logoSml;

    }
// when you click right, it will add to the dv and than decrement the tv
// it resets to back to a fullsized dashboard nav
    else {

      dv = this.state.dashboardVar + 1;

      tv = this.state.tagVar - 1;

      icon = "fas fa-angle-double-left";

      button = "btn";

      link = "nav-links";

      newLogo = logo;
    }
    // set the variables onto state for components to use
    // I would make these variables into an object, and just store it instead of one by one
    // I am not going to change that now, hopefully I have time to get to it soon.
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

  

        {/* this is the route for the landing page and it will load when the application is first rendered  */}
        <Route exact path="/" render={() => <Landing />} />

        {/* signup modal just takes props for using the history push  */}
        <Route path="/signup" render={props => <Signup {...props} />} />

        <Route

          path="/signin"

          render={props => (

            <Signin loadPictures={this.loadPictures} {...props} />

          )}
        />

        {/* these routes are all contained inside of a Row
        allowing us to wrap the components in Columns
        and render in the same amount of space  */}
        <Row>

          {/* this is the dashboard path and it is rendered when /dashboard is linked or put
           */}
     
          
   
         

  
         </Row>

      
      </div>
    );
  }
}

export default App;

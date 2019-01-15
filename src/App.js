import React, { Component } from "react";
import { Row } from "reactstrap";

import "./App.css";
import "./css/index.css";
import { Route } from "react-router-dom";
import axios from "axios";
import Landing from "./components/preLogin/landing";
import Signup from "./components/preLogin/signup";
import Signin from "./components/preLogin/signin";
import Dashboard from "./components/dashboard/dashboard";
import TagView from "./components/dashboard/tagView";
import Trek from "./components/dashboard/trek";
import Tags from "./components/dashboard/tags";
import logo from "./assets/logo.png";
import logoSml from "./assets/logoinit.png";
import CreatePost from "./components/dashboard/createNewPost";
import Post from "./components/dashboard/post";
class App extends Component {
  state = {
    user: "",
    dashboardVar: 1,
    tagVar: 0,
    collapseIcon: "fas fa-angle-double-left",
    buttonClass: "btn",
    linkClass: "nav-links",
    logo: logo,
    picture: {},
    count: 0,
    post: []
  };
  componentDidMount() {
    this.loadUser();
    this.loadPictures();
  }
 
  loadUser = () => {
    const token = localStorage.getItem("token");
    const id = localStorage.getItem("id");
    const authToken = `${token}`;

    const requestOptions = {
      headers: {
        Authorization: authToken
      }
    };
    axios
      .get(`https://dt-back-end.herokuapp.com/users/${id}`, requestOptions)
      .then(response => {
        this.setState({ user: response.data });
        let count = 0;
        response.data.post.forEach(like => {
          count += like.unreadComment;
          count += like.unreadLike;
        });
        this.setState({ count: count, post: response.data.post });
      })

      .catch(err => {});
  };
 RenderAbout =()=>{
    
  }
  loadPictures = () => {
    const token = localStorage.getItem("token");

    const authToken = `${token}`;

    const requestOptions = {
      headers: {
        Authorization: authToken
      }
    };
    axios
      .get("https://dt-back-end.herokuapp.com/pictures", requestOptions)
      .then(response => {
        this.setState({ picture: response.data });
      })
      .catch(err => {});
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
        <Route path="/signup" render={props => <Signup {...props} />} />
        <Route
          path="/signin"
          render={props => (
            <Signin loadPictures={this.loadPictures} {...props} />
          )}
        />
        <Row>
          <Route
            path="/dashboard"
            render={props => (
              <Dashboard
                likes={this.state.count}
                post={this.state.post}
                user={this.state.user}
                loadUser={this.loadUser}
                pictures={this.state.picture}
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
            render={props => (
              <Tags
                pictures={this.state.picture}
                {...props}
                tagVar={this.state.tagVar}
              />
            )}
          />
          <Route
            exact
            path="/dashboard/post"
            render={props => (
              <Post
                post={this.state.post}
                {...props}
                tagVar={this.state.tagVar}
                likes={this.state.count}
                post={this.state.post}
                user={this.state.user}
              />
            )}
          />
          <Route
            exact
            path="/dashboard/:id"
            render={props => (
              <TagView
                picture={this.state.picture}
                {...props}
                user={this.state.user}
                tagVar={this.state.tagVar}
              />
            )}
          />
          <Route
            exact
            path="/dashboard/:id/post"
            render={props => (
              <Post
                post={this.state.post}
                {...props}
                tagVar={this.state.tagVar}
                loadUser={this.loadUser}
                likes={this.state.count}
                post={this.state.post}
                user={this.state.user}
                loadUser={this.loadUser}
              />
            )}
          />
          <Route
            exact
            path="/dashboard/trek/:id"
            render={props => (
              <Trek
                {...props}
                user={this.state.user}
                tagVar={this.state.tagVar}
                loadUser={this.loadUser}
              />
            )}
          />
          <Route
            exact
            path="/dashboard/create/:id"
            render={props => (
              <CreatePost
                {...props}
                pictures={this.state.picture}
                user={this.state.user}
                tagVar={this.state.tagVar}
              />
            )}
          />
        </Row>
      </div>
    );
  }
}

export default App;

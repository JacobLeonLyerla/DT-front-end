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
import TagView from "./components/dashboard/tagView";
import Trek from "./components/dashboard/trek";
import Tags from "./components/dashboard/tags";
import logo from "./assets/logo.png";
import logoSml from "./assets/logoinit.png";
import CreatePost from "./components/dashboard/createNewPost";
import Post from "./components/dashboard/post";
import Info from "./components/preLogin/about";
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

    this.toggle = this.toggle.bind(this);
  }
  // this will call when the component is rendered
  // in turn it will call the load users and pictures methods
  componentDidMount() {
    this.loadUser();
    this.loadPictures();
  }

  // load user will call the endpoint and get back the user by id
  // that data will than be set onto state
  loadUser = () => {
    // we pull the token off of local storage, this path is protected so we need a token
    const token = localStorage.getItem("token");
    // pull the id off of local storage in order to get the user we need the id to pull it out by that id
    const id = localStorage.getItem("id");
    //  add the token as the value to our Authorization key inside of our headers object
    const requestOptions = {
      headers: {
        Authorization: token
      }
    };
    // create an axios request as a git and when we pass in an ID the endpoint with get by id
    axios
      .get(`https://dt-back-end.herokuapp.com/users/${id}`, requestOptions)
      .then(response => {
        // load the whole response data onto state
        this.setState({ user: response.data });
        // we than create a count variable to store our values
        let count = 0;
        // the users post is an array of objects
        // this allows us to interate over it, and pull out the unread comments and notifications
        // than we can store that into the count variable,
        // I use this for notifications so the unreadComments and notifications are added and rendered as notifcations to the user
        response.data.post.forEach(like => {
          count += like.unreadComment;
          count += like.unreadLike;
        });
        // we set the count data and post data on the component state respectivly
        this.setState({ count: count, post: response.data.post });
      })

      .catch(err => {});
  };
  // this is a basic modal toggle function pulled out of the reactstrap documentation.
  // it just triggers false or true based whatever the current modal value o nstate is
  // so if it's ture toggle will change it to false
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  // load pictures is also a proctected route
  loadPictures = () => {
    const token = localStorage.getItem("token");
    const requestOptions = {
      headers: {
        Authorization: token
      }
    };
    // this is get route with no id so it just grabes everything at that inpoint
    axios
      .get("https://dt-back-end.herokuapp.com/pictures", requestOptions)
      .then(response => {
        this.setState({ picture: response.data });
      })
      .catch(err => {});
  };
  // this is a function that lets me change the size of columns
  // inside of different  components
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
       {/* this is where my modal is it will render the info component when it is toggled */}

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className="modal-about"
        >
          <Info />
        </Modal>
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
          <Route
            path="/dashboard"
            render={() => (
              // we are passing all the variables form state and our methods into this Route
              // so we can use them as props inside of the dashboard for rendering
              // however I would have put a lot of these into one object
              // I will try to fix that if I get that chance.
              <Dashboard
                notifications={this.state.count}
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
                toggle={this.toggle}
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
                {...props}
                tagVar={this.state.tagVar}
                loadUser={this.loadUser}
                notifications={this.state.count}
                post={this.state.post}
                user={this.state.user}
      
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

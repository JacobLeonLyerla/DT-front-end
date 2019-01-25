import React, { Component, Fragment } from "react";
import {
  Col,
  Navbar,
  NavbarBrand,
  Media,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge
} from "reactstrap";
import { Link } from "react-router-dom";

class Dashboard extends Component {


 // when the user props is not an empty array it will call load user from the props
  componentDidMount = event => {
    if (this.props.user === "") {
      this.props.loadUser();
    }
  }; 
  
  // this is for our drop down, it allows us to map through the categories
  // and render them as items inside of our dropdown list
 renderCategoreis = () => {
    if (this.props.pictures.length > 0) {
      return this.props.pictures.map(cate => (
        <Link to={`/dashboard/${cate.name}`} style={{ textDecoration: "none" }}>
          <DropdownItem>{cate.name.replace(/-/g, " ")}</DropdownItem>
        </Link>
      ));
    }
  };
  render() {
    return (
      // our route is wrapped in a row so this col will assign it a size in the row
      // it takes the variable form app.js and uses it to control sizing.
      
      <Col md={`${1 + this.props.dashboardVar}`}>
        <div className="dashboard">
          <Navbar>
            {/* the logo here will be based on whatever is on state in app.js so what is being passed in
            so when we change the logo it changes what renders here  */}
            <NavbarBrand href="/dashboard">
              <Link to="/dashboard">
                <Media src={this.props.logo} />
              </Link>
            </NavbarBrand>
             {/* this just renders whatever user is signed in pulling it off of props */}
            <div className={this.props.link}>{this.props.user.username}</div>
            {/* the class name is set by props so it changes based on what is passed in
            allowing resizing, this all may be a bit brute force.

            when the user clicks post it will link them to thier post */}
            <Link
              className={this.props.link}
              to={`/dashboard/${this.props.user.username}/post`}
              style={{ textDecoration: "none" }}
            >
             {/* this ternary checks if our user is defined and if they are
             we render we can check more info */}
              {this.props.user !== undefined ? (
                <Fragment>
                  {/* we then check that the user has more than zero notifications
                  if they do we render a badge next to post showing the number */}
                  {this.props.notifications > 0 ? (
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      Post{" "}
                      <div style={{ color: "coral", marginLeft: ".4vw" }}>
                        <Badge style={{ background: "orange" }}>
                          {this.props.notifications}
                        </Badge>{" "}
                      </div>
                    </div>
                  ) : (
                    <Fragment>post</Fragment>
                  )}{" "}
                </Fragment>
              ) : (
                <Fragment>Post</Fragment>
              )}
            </Link>
            {/* this will also toggle my about page  */}
            <div
              className={this.props.link}
              onClick={() => this.props.toggle()}
              style={{ textDecoration: "none" }}
            >
              About
            </div>

            <UncontrolledDropdown direction="right">
              <DropdownToggle className={this.props.btn} color="primary" caret>
                {this.props.btn === "btn-sml" ? (
                  <Fragment>Cate...</Fragment>
                ) : (
                  <Fragment>Categories</Fragment>
                )}
              </DropdownToggle>
              <DropdownMenu>{this.renderCategoreis()}</DropdownMenu>
            </UncontrolledDropdown>
            <div onClick={() => this.props.columnSizer()}>
              <i class={this.props.collapseIcon} />
            </div>
          </Navbar>
        </div>
      </Col>
    );
  }
}
export default Dashboard;

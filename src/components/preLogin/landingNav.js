import React, { Component } from "react";
import "../../css/index.css";
import { Nav, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";
class LandingNav extends Component {
  render() {
    return (
      <div className="landing-Nav">
        <Nav>
        

          <NavItem>
            <Link
              style={{ color: "white", textDecoration: "none" }}
              to="/signup"
            >
              <NavLink className="signup">Sign Up</NavLink>
            </Link>
          </NavItem>

          <NavItem>
            <Link
              style={{ color: "white", textDecoration: "none" }}
              to="/signin"
            >
              <NavLink>Sign In</NavLink>
            </Link>
          </NavItem>
        </Nav>
      </div>
    );
  }
}
export default LandingNav;

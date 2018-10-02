import React,{Component} from 'react';
import "../css/index.css"
import { Nav, NavItem, NavLink } from 'reactstrap';
 class LandingNav extends Component {
  render() {
    return (
      <div className="landing-Nav">
        <Nav>
          <NavItem>
            <NavLink className="signup" href="#">Sign Up</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Sign In</NavLink>
          </NavItem>
        </Nav>
        
      </div>
    );
  }
}
export default LandingNav;
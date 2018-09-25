import React,{Component} from 'react';
import "../css/index.css"
import { Nav, NavItem, NavLink } from 'reactstrap';
 class LandingNav extends Component {
  render() {
    return (
      <div className="landing-Nav">
        <Nav>
          <NavItem>
            <NavLink href="#">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Another Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="#">Disabled Link</NavLink>
          </NavItem>
        </Nav>
        
      </div>
    );
  }
}
export default LandingNav;
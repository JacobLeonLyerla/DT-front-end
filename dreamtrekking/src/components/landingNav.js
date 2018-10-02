import React,{Component} from 'react';
import "../css/index.css"
import { Nav, NavItem, NavLink } from 'reactstrap';
 class LandingNav extends Component {

  scrollAbout =()=>{
    window.scrollTo(800,0)
  }
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
            <NavLink onclick={this.scrollAbout}>About</NavLink>
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
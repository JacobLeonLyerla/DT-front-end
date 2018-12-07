import React from "react";
import {
  Col,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Media,
  UncontrolledDropdown,
  NavItem,
  NavLink,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
const Dashboard = () => {
  return (
    <Col md="2">
      <div className="dashboard">
        <Navbar >
          <NavbarBrand href="/">
            <Media src={logo} />
          </NavbarBrand>
         
            <Link to="/userinfo" style={{ textDecoration: 'none',}}>
            name placeholder
            </Link>
            <Link to="/userinfo" style={{ textDecoration: 'none',}}>
           notifications
            </Link>
            <Link to="/userinfo" style={{ textDecoration: 'none',}}>
            settings
            </Link>
          

          <NavbarToggler onClick={this.toggle} />

          <UncontrolledDropdown color="primary">
            <DropdownToggle caret>Catagories</DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Forest</DropdownItem>
              <DropdownItem>Lake</DropdownItem>
              <DropdownItem>Market</DropdownItem>

              <DropdownItem>Beach</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Navbar>
      </div>
    </Col>
  );
};
export default Dashboard;

import React from "react";
import {
  Col,
  Navbar,
  NavbarBrand,
  Media,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button
} from "reactstrap";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
const Dashboard = props => {
  console.log(props)
  
  return (

    <Col md={`${1 + props.dashboardVar}`}>
      <div className="dashboard">
        <Navbar >
          <NavbarBrand href="/">
            <Media src={logo} />
          </NavbarBrand>
            <Link className="nav-links" to="/userinfo" style={{ textDecoration: 'none',}}>
            name placeholder
            </Link>
            <Link className="nav-links" to="/userinfo" style={{ textDecoration: 'none',}}>
           notifications
            </Link>
            <Link className="nav-links" to="/userinfo" style={{ textDecoration: 'none',}}>
            settings
            </Link>
            
          <UncontrolledDropdown color="primary">
            <DropdownToggle caret>Catagories</DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Forest</DropdownItem>
              <DropdownItem>Lake</DropdownItem>
              <DropdownItem>Market</DropdownItem>
              <DropdownItem>Beach</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        <Button onClick={()=> props.columnSizer()}>tab</Button>
        </Navbar>
      </div>
    </Col>
  );
};
export default Dashboard;

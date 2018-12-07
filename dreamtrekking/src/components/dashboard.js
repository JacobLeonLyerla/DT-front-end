import React from "react";
import {
  Col,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Media
} from 'reactstrap';
import logo from "../assets/logo.png"
const Dashboard = () => {
  return (
    <Col md="2">
     <div className="dashboard">
        <Navbar  light expand="md">
          <NavbarBrand href="/"><Media src={logo}/></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
         
        </Navbar>
      </div>
    </Col>
  );
};
export default Dashboard;

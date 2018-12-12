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

const Dashboard = props => {
  console.log(props);

  return (
    <Col md={`${1 + props.dashboardVar}`}>
      <div className="dashboard">
        <Navbar>
          <NavbarBrand href="/">
            <Media src={props.logo} />
          </NavbarBrand>
          <Link
            className={props.link}
            to="/userinfo"
            style={{ textDecoration: "none" }}
          >
            name placeholder
          </Link>
          <Link
            className={props.link}
            to="/userinfo"
            style={{ textDecoration: "none" }}
          >
            notifications
          </Link>
          <Link
            className={props.link}
            to="/userinfo"
            style={{ textDecoration: "none" }}
          >
            settings
          </Link>

          <UncontrolledDropdown direction="right">
            <DropdownToggle  className={props.btn} caret>
              Catagories
            </DropdownToggle>
            <DropdownMenu>
            <Link to="/dashboard/forest" style={{ textDecoration: "none" }}>
              <DropdownItem>Forest</DropdownItem>
              </Link>
              <Link to="/dashboard/lake" style={{ textDecoration: "none" }}>
              <DropdownItem>Lake</DropdownItem></Link>
              <Link to="/dashboard/market" style={{ textDecoration: "none" }}>
              <DropdownItem>Market</DropdownItem></Link>
              <Link to="/dashboard/beach" style={{ textDecoration: "none" }}>
              <DropdownItem>Beach</DropdownItem></Link>
            </DropdownMenu>
          </UncontrolledDropdown>
          <div onClick={() => props.columnSizer()}>
            <i class={props.collapseIcon} />
          </div>
        </Navbar>
      </div>
    </Col>
  );
};
export default Dashboard;

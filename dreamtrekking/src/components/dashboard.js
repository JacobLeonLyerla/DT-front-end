import React,{Component} from "react";
import {
  Col,
  Navbar,
  NavbarBrand,
  Media,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { Link } from "react-router-dom";

class Dashboard extends Component {
  renderCatagoreis=()=>{
    if(this.props.pictures.length > 0){
    return this.props.pictures.map(cata=>(
      <Link to={`/dashboard/${cata.name}`} style={{ textDecoration: "none" }}>
              <DropdownItem>{cata.name}</DropdownItem>
              </Link>
    ))
    }
  }
render(){
  console.log(localStorage.getItem("token"))
  return (
    <Col md={`${1 + this.props.dashboardVar}`}>
      <div className="dashboard">
        <Navbar>
          <NavbarBrand href="/">
            <Media src={this.props.logo} />
          </NavbarBrand>
          <Link
            className={this.props.link}
            to="/userinfo"
            style={{ textDecoration: "none" }}
          >
            name placeholder
          </Link>
          <Link
            className={this.props.link}
            to="/userinfo"
            style={{ textDecoration: "none" }}
          >
            notifications
          </Link>
          <Link
            className={this.props.link}
            to="/userinfo"
            style={{ textDecoration: "none" }}
          >
            settings
          </Link>

          <UncontrolledDropdown direction="right">
            <DropdownToggle  className={this.props.btn} caret>
              Catagories
            </DropdownToggle>
            <DropdownMenu>
            {this.renderCatagoreis()}
            </DropdownMenu>
          </UncontrolledDropdown>
          <div onClick={() => this.props.columnSizer()}>
            <i class={this.props.collapseIcon} />
          </div>
        </Navbar>
      </div>
    </Col>
  );
}
};
export default Dashboard;

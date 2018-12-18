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
import axios from "axios";

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
  componentDidMount = event => {
    const token = localStorage.getItem("token");

    const authToken = `${token}`;

    const requestOptions = {
      headers: {
        Authorization: authToken
      }
    };
    axios
      .get("http://localhost:5500/users", requestOptions)
      .then(response => {
        this.setState({ users: response.data });
      })
      .catch(err => {
      });
  };
render(){
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
import React, { Component,Fragment } from "react";
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
  
  renderCatagoreis = () => {
    if (this.props.pictures.length > 0) {
      return this.props.pictures.map(cata => (
        <Link to={`/dashboard/${cata.name}`} style={{ textDecoration: "none" }}>
          <DropdownItem>{cata.name.replace(/-/g, " ")}</DropdownItem>
        </Link>
      ));
    }
  };
  componentDidMount = event => {
    if (this.props.user === "") {
      this.props.loadUser(); 
  
    }

  };


  render() {
    return (
      <Col md={`${1 + this.props.dashboardVar}`}>
        <div className="dashboard">
          <Navbar>
            <NavbarBrand href="/">
              <Media src={this.props.logo} />
            </NavbarBrand>
            <div className={this.props.link}>{this.props.user.username}</div>
            <Link
              className={this.props.link}
              to={`/dashboard/${this.props.user.username}/post`}
              style={{ textDecoration: "none" }}
            >
    {this.props.user !== undefined ?(<Fragment>{(this.props.likes >0)?(<div style={{display:"flex",justifyContent:"center"}}>Post <div style={{color:"coral",marginLeft:".4vw"}}>( {this.props.likes} )</div></div>):(<Fragment>post</Fragment>)} </Fragment>):(<Fragment>Post</Fragment>)}
            
            </Link>
            <Link
              className={this.props.link}
              to="/userinfo"
              style={{ textDecoration: "none" }}
            >
              settings
            </Link>

            <UncontrolledDropdown direction="right">
              <DropdownToggle  className={this.props.btn} color="primary" caret>
                Catagories
              </DropdownToggle>
              <DropdownMenu>{this.renderCatagoreis()}</DropdownMenu>
            </UncontrolledDropdown>
            <div onClick={() => this.props.columnSizer()}>
              <i class={this.props.collapseIcon} />
            </div>
          </Navbar>
        </div>
      </Col>
    );
  }
}
export default Dashboard;

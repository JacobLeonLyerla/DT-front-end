import React, { Component, Fragment } from "react";
import {
  Col,
  Navbar,
  NavbarBrand,
  Media,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
  Modal
} from "reactstrap";
import { Link } from "react-router-dom";


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
            <NavbarBrand href="/dashboard">
              <Link to="/dashboard">
                <Media src={this.props.logo} />
              </Link>
            </NavbarBrand>
            <div className={this.props.link}>{this.props.user.username}</div>
            <Link
              className={this.props.link}
              to={`/dashboard/${this.props.user.username}/post`}
              style={{ textDecoration: "none" }}
            >
              {this.props.user !== undefined ? (
                <Fragment>
                  {this.props.likes > 0 ? (
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      Post{" "}
                      <div style={{ color: "coral", marginLeft: ".4vw" }}>
                        <Badge style={{ background: "orange" }}>
                          {this.props.likes}
                        </Badge>{" "}
                      </div>
                    </div>
                  ) : (
                    <Fragment>post</Fragment>
                  )}{" "}
                </Fragment>
              ) : (
                <Fragment>Post</Fragment>
              )}
            </Link>
            <div
              className={this.props.link}
              onClick={()=>this.props.toggle()}
              style={{ textDecoration: "none" }}
            >
              About
            </div>

            <UncontrolledDropdown direction="right">
              <DropdownToggle className={this.props.btn} color="primary" caret>
                {this.props.btn === "btn-sml" ? (
                  <Fragment>Cata...</Fragment>
                ) : (
                  <Fragment>Catagories</Fragment>
                )}
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

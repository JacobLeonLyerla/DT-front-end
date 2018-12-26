import React, { Component, Fragment } from "react";
import { Button, Col, Row, Badge, Form, Input, DropdownItem,UncontrolledDropdown,DropdownToggle,DropdownMenu } from "reactstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import imgs from "../assets/exportImgs.js";
class Post extends Component {
  state = {
    tags: [],
    name: "",
    user: "",
    country: "",
    region: "",
    city: "",
    description: ""
  };
  componentDidMount() {
    let { id } = this.props.match.params;
    this.fetchTags();
  }
  renderCatagoreis = () => {
    if (this.props.pictures.length > 0) {
      return this.props.pictures.map(cata => (<Fragment>
        {console.log(cata)}
          <DropdownItem>{cata.name}</DropdownItem>
      </Fragment>));
    }
  };
  fetchTags = () => {};
  renderPictures = () => {
    let arr = [];
    if (this.props.pictures !== undefined) {
      if (this.props.pictures.length > 0) {
        this.props.pictures.forEach(e => {
          arr.push(e.name);
        });
      }
    }
    if (this.props.imgTag !== undefined) {
      if (this.props.imgTag.length > 0) {
        arr = this.props.imgTag;
      }
    }
    if (arr.length > 0) {
      return arr.map(img => {
        return (
          <Col
            data-ca="ca"
            onClick={() => this.filterTags(img)}
            style={{
              backgroundImage: `url(${
                imgs[img.replace(/-/g, "").toLowerCase()]
              })`
            }}
            className={`tag-img tags`}
            md="6"
          >
            <div className={`cover ${this.checked(img)}`}>
              {" "}
              <p>{img.replace(/-/g, " ")}</p>
            </div>
          </Col>
        );
      });
    }
  };
  checked = id => {
    let filteredArr = this.state.tags.filter(function(value, index, arr) {
      return value !== id;
    });
    if (filteredArr.length < this.state.tags.length) {
      return "checked";
    }
  };
  filterTags(id) {
    let arr = this.state.tags;

    let filteredArr = arr.filter(function(value, index, arr) {
      return value !== id;
    });
    if (filteredArr.length === arr.length) {
      filteredArr.push(id);
    }

    this.setState({ tags: filteredArr });
  }
  renderPickedTags = () => {
    if (this.state.tags.length > 0) {
      return this.state.tags.map(tag => (
        <Badge onClick={() => this.filterTags(tag)}>{tag}</Badge>
      ));
    }
  };
  Form = () => {
    return (
      <Form className="create-form">
        <UncontrolledDropdown direction="right">
              <DropdownToggle className={this.props.btn} caret>
                Tags
              </DropdownToggle>
              <DropdownMenu>{this.renderCatagoreis()}</DropdownMenu>
            </UncontrolledDropdown>
        <div className="text-left">Title</div>
        <Input id="name" />
        <br />

        <div className="text-left">Description</div>
        <Input type="textarea" style={{ height: "30vh" }} />
        <br />
        <Row className="create-inputmid">
          <Col md="4">
            <Input placeholder="Country" />
          </Col>
          <Col md="4">
            <Input placeholder="Region" />
          </Col>
          <Col md="4">
            <Input placeholder="City" />
          </Col>
        </Row>
      
      </Form>
    );
  };
  render() {
    return (
      <Col md={`${10 + this.props.tagVar}`} className="tags-container">
        <div className="tag-badge">{this.renderPickedTags()}</div>
        {this.Form()}
        <Button className="create-button">Post New Tag</Button>
        <Row>{this.renderPictures()}</Row>
      </Col>
    );
  }
}
export default Post;

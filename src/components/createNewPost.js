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
      return this.props.pictures.map(tag => (<Fragment>
          <DropdownItem className={`${this.checked(tag.name,"dropdown-check")}`}  onClick={() => this.filterTags(tag.name)}>{tag.name}</DropdownItem>
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
  checked = (id,type) => {
    let filteredArr = this.state.tags.filter(function(value, index, arr) {
      return value !== id;
    });
    if (filteredArr.length < this.state.tags.length && type !== "dropdown-check") {
      return "checked";
    }
    if(filteredArr.length < this.state.tags.length && type === "dropdown-check"){
      return"dropdown-check"
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
  handleSubmit = () => {
    let post = {};
    if(this.state.description !=="" && this.state.name !== "")
    post.description = this.state.description;
    post.name = this.state.name
    post.city = this.state.city
    post.region =this.state.region
    post.counry = this.state.country
    axios
      .put(`https://dt-back-end.herokuapp.com/comments/${this.props.id}`, post)
      .then(response => {
        console.log(response.data);

      })
      .catch(err => {
        console.log(err);
      });
  };
  Form = () => {
    return (
      <Form className="create-form">
        <UncontrolledDropdown direction="left">
              <DropdownToggle className={this.props.btn}  color="primary" caret>
                Tags
              </DropdownToggle>
              <DropdownMenu>{this.renderCatagoreis()}</DropdownMenu>
            </UncontrolledDropdown>
        <div className="text-left">Title</div>
       
        <Input id="name" />
         <div className="tag-badge">{this.renderPickedTags()}</div>
       

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
          <br />
      </Form>
    );
  };
  render() {
    return (
      <Col md={`${10 + this.props.tagVar}`} className="tags-container">
  
        {this.Form()}
        <Button className="create-button">Post New Tag</Button>
        <Row>{this.renderPictures()}</Row>
      </Col>
    );
  }
}
export default Post;

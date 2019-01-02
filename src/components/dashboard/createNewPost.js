import React, { Component, Fragment } from "react";
import {
  Button,
  Col,
  Row,
  Badge,
  Form,
  Input,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu
} from "reactstrap";
import Geosuggest from './geosuggest';


import axios from "axios";
import { Link } from "react-router-dom";
import imgs from "../../assets/exportImgs.js";
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
      return this.props.pictures.map(tag => (
        <Fragment>
          <DropdownItem
            className={`${this.checked(tag.name, "dropdown-check")}`}
            onClick={() => this.filterTags(tag.name)}
          >
            {tag.name.replace(/-/g, " ")}
          </DropdownItem>
        </Fragment>
      ));
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
  checked = (id, type) => {
    let filteredArr = this.state.tags.filter(function(value, index, arr) {
      return value !== id;
    });
    if (
      filteredArr.length < this.state.tags.length &&
      type !== "dropdown-check"
    ) {
      return "checked";
    }
    if (
      filteredArr.length < this.state.tags.length &&
      type === "dropdown-check"
    ) {
      return "dropdown-check";
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
        <Badge onClick={() => this.filterTags(tag)}>
          {tag.replace(/-/g, " ")}
        </Badge>
      ));
    }
  };

  handleInput = input => {
    this.setState({ [input.target.name]: input.target.value });
  };
  handleSubmit = () => {
    let post = {};
    if (
      this.state.description !== "" &&
      this.state.name !== "" &&
      this.state.tags.length > 0
    ) {
      post.user = this.props.user.username;
      post.tag = this.state.tags;
      post.description = this.state.description;
      post.name = this.state.name;
      post.city = this.state.city;
      post.region = this.state.region;
      post.country = this.state.country;
    }
    axios
      .post("https://dt-back-end.herokuapp.com/tags", post)
      .then(response => {
        let postId = {};
        postId.post = this.props.user.post;
        postId.post.push(response.data._id);
        axios
          .put(
            `https://dt-back-end.herokuapp.com/users/${this.props.user._id}`,
            postId
          )
          .then(response => {})
          .catch(err => {});

        this.setState({
          tags: [],
          name: "",
          user: "",
          country: "",
          region: "",
          city: "",
          description: ""
        });
      })
      .catch(err => {});
  };

  Form = () => {

    return (<Fragment>
      <Form className="create-form">
        <UncontrolledDropdown direction="left">
          <DropdownToggle className={this.props.btn} color="primary" caret>
            Tags
          </DropdownToggle>
          <DropdownMenu>{this.renderCatagoreis()}</DropdownMenu>
        </UncontrolledDropdown>
        <div className="text-left">Title</div>

        <Input
          name="name"
          value={this.state.name}
          onChange={this.handleInput}
        />
        <div className="tag-badge">{this.renderPickedTags()}</div>

        <div className="text-left">Description</div>
        <Input
          type="textarea"
          style={{ height: "30vh" }}
          name="description"
          value={this.state.description}
          onChange={this.handleInput}
        /><br/>
    
         <Geosuggest
          placeholder="Start typing!"
        />

     
    
        <br />
        <Row className="create-inputmid">
          <Col md="4">
            <Input
              placeholder="Country"
              name="country"
              value={this.state.country}
              onChange={this.handleInput}
            />
          </Col>
          <Col md="4">
            <Input
              placeholder="Region"
              name="region"
              value={this.state.region}
              onChange={this.handleInput}
            />
          </Col>
          <Col md="4">
            <Input
              placeholder="City"
              name="city"
              value={this.state.city}
              onChange={this.handleInput}
            />
          </Col>
        </Row>
        <br />
      </Form>
   </Fragment> );
  }; 

  render() {
    return (
      <Col md={`${10 + this.props.tagVar}`} className="tags-container">
        {this.Form()}
        <Button onClick={() => this.handleSubmit()} className="create-button">
          Create New Post
        </Button>
        <Row>{this.renderPictures()}</Row>
      </Col>
    );
  }


}

export default Post;

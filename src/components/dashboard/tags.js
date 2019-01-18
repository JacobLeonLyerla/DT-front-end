import React, { Component } from "react";
import { Col } from "reactstrap";
import Pictures from "./renderPictures.js";
class Tags extends Component {
  render() {
    return (
      <Col md={`${10 + this.props.tagVar}`} className="tags-container">
        <Pictures pictures={this.props.pictures} />
      </Col>
    );
  }
}
export default Tags;

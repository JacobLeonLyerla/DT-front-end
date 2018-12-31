import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import imgs from "../../assets/exportImgs.js";

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

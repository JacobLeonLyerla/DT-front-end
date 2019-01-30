import React, { Component } from "react";
import { Col } from "reactstrap";
import Pictures from "./renderPictures.js";
class Tags extends Component {
  render() {
    return (
      // this column is part of the row with dashboard
      // and will be sized based on the variables passed in on props
      <Col md={`${10 + this.props.tagVar}`} className="tags-container">
        {/* we already had the pictures, sent in as props.
      pictures are just the categories that load in.
      so we pass them into our pictures component and it renders them for us
      neat right!? */}
        <Pictures pictures={this.props.pictures} />
      </Col>
    );
  }
}
export default Tags;

import React, { Component } from "react";
import {Col} from "reactstrap"
class Post extends Component {
  render() {
    return (
        <Col className="table-container" md={`${10 + this.props.tagVar}`}>
        test
      </Col>
    );
  }
}
export default Post;

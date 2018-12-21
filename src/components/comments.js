// here is where we will render the commetns and set up all the puts and stuff to maintain them



import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";

class Comments extends Component {
 

  render() {
    return (
      <Col className="table-container" md={`${10 + this.props.tagVar}`}>
     
      </Col>
    );
  }
}
export default Comments;

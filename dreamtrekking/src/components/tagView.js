import React from "react";
import {
  Col,

} from "reactstrap";
import { Link } from "react-router-dom";

const TagView = props => {
  console.log(props);

  return (
    <Col md={`${1 + props.tagVar}`}>
    
    </Col>
  );
};
export default TagView;

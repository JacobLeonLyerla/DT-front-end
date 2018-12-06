import React from "react";
import { Row, Col, Media } from "reactstrap";
import desert from "../assets/desert.jpg";
const Tags = () => {
  return (
    <Col md="10" className="tags-container">
      <Row>
        <Col className="tag-img" md="3">
          <Media className="tag" src={desert} />
        </Col>
        <Col className="tag-img" md="3">
          <Media className="tag" src={desert} />
        </Col>  <Col className="tag-img" md="3">
          <Media className="tag" src={desert} />
        </Col>
      </Row>
    </Col>
  );
};
export default Tags;

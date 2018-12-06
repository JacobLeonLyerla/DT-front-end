import React from "react";
import { Row, Col, Media } from "reactstrap";
import desert from "../assets/desert.jpg";
import woods from "../assets/red-forest.jpg";
import water from "../assets/rain.jpeg";
import snow from "../assets/snow.jpeg"
const Tags = () => {
  return (
    <Col md="10" className="tags-container">

      <Row>
        <Col className="tag-img" md="6">
          <Media className="tag" src={water} />
        </Col>
        <Col className="tag-img" md="6">
          <Media className="tag" src={snow} />
        </Col>{" "}
        <Col className="tag-img" md="6">
          <Media className="tag" src={desert} />
        </Col>
        <Col className="tag-img" md="6">
          <Media className="tag" src={woods} />
        </Col>{" "}
        <Col className="tag-img" md="10">
          <Media className="tag" src={woods} />
        </Col>{" "}
        <Col className="tag-img" md="10">
          <Media className="tag" src={desert} />
        </Col>

      </Row>

    </Col>
  );
};
export default Tags;

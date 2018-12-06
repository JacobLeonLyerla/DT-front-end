import React from "react";
import { Row, Col, Media } from "reactstrap";
import desert from "../assets/desert.jpg";
import woods from "../assets/red-forest.jpg";
import water from "../assets/water.jpg";
const Tags = () => {
  return (
    <Col md="8" className="tags-container">

      <Row>
        <Col className="tag-img" md="3">
          <Media className="tag" src={desert} />
        </Col>
        <Col className="tag-img" md="3">
          <Media className="tag" src={woods} />
        </Col>{" "}
        <Col className="tag-img" md="3">
          <Media className="tag" src={water} />
        </Col>
        <Col className="tag-img" md="3">
          <Media className="tag" src={woods} />
        </Col>{" "}
        <Col className="tag-img" md="3">
          <Media className="tag" src={woods} />
        </Col>{" "}

      </Row>

    </Col>
  );
};
export default Tags;

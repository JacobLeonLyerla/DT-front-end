import React from "react";
import { Row, Col, Media } from "reactstrap";
import market from "../assets/river-market.jpeg";
import camping from "../assets/camping.jpeg";
import water from "../assets/rain.jpeg";
import snow from "../assets/snow.jpeg";
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
          <Media className="tag" src={market} />
        </Col>
        <Col className="tag-img" md="6">
          <Media className="tag" src={camping} />
        </Col>
      </Row>
    </Col>
  );
};
export default Tags;

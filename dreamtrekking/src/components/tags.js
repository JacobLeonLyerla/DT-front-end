import React from "react";
import { Row, Col, Media } from "reactstrap";
import market from "../assets/river-market.jpeg";
import camping from "../assets/camping.jpeg";
import water from "../assets/rain.jpeg";
import snow from "../assets/snow.jpeg";
const Tags = props => {
  return (
    <Col md={`${10 + props.tagVar}`} className="tags-container">
      <Row>
        <Col className="tag-img water" md="6">
        <div className="cover "> <p>Lake</p></div>
        </Col>
        <Col className="tag-img snow" md="6">
        <div className="cover "> <p>Snow</p>
        </div>
        </Col>{" "}
        <Col className="tag-img market" md="6">
        <div className="cover "> <p>Market</p>
        </div>
        </Col>
        <Col className="tag-img camping" md="6">
        <div className="cover "> <p>Camping</p>
        </div>
        </Col>
        <Col className="tag-img snow" md="6">
        <div className="cover "> <p>Camping</p>
        </div>
        </Col>
        <Col className="tag-img water" md="6">
        <div className="cover "> <p>Camping</p>
        </div>
        </Col>
      </Row>
    </Col>
  );
};
export default Tags;

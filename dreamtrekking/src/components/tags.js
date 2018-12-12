import React from "react";
import { Row, Col } from "reactstrap";
const Tags = props => {
  return (
    <Col md={`${10 + props.tagVar}`} className="tags-container">
      <Row>
        <Col data-ca="ca" className="tag-img water" md="6">
          <div className="cover ">
            {" "}
            <p>Lake</p>
          </div>
        </Col>
        <Col className="tag-img snow" md="6">
          <div className="cover ">
            {" "}
            <p>Snow</p>
          </div>
        </Col>{" "}
        <Col className="tag-img market" md="6">
          <div className="cover ">
            {" "}
            <p>Market</p>
          </div>
        </Col>
        <Col className="tag-img camping" md="6">
          <div className="cover ">
            {" "}
            <p>Camping</p>
          </div>
        </Col>
        <Col className="tag-img ranch" md="6">
          <div className="cover ">
            {" "}
            <p>Ranch</p>
          </div>
        </Col>
        <Col className="tag-img asia" md="6">
          <div className="cover ">
            {" "}
            <p>Asia</p>
          </div>
        </Col>
        <Col className="tag-img europe" md="6">
          <div className="cover ">
            {" "}
            <p>Europe</p>
          </div>
        </Col>
        <Col className="tag-img africa" md="6">
          <div className="cover ">
            {" "}
            <p>Africa</p>
          </div>
        </Col>
        <Col className="tag-img alaska" md="6">
          <div className="cover ">
            {" "}
            <p>Alaska</p>
          </div>
        </Col>
        <Col className="tag-img nz" md="6">
          <div className="cover ">
            {" "}
            <p>New Zeland</p>
          </div>
        </Col>
      </Row>
    </Col>
  );
};
export default Tags;

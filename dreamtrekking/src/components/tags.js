import React from "react";
import { Row, Col } from "reactstrap";
import {Link} from "react-router-dom"
const Tags = props => {
  return (
    <Col md={`${10 + props.tagVar}`} className="tags-container">
      <Row>
       <Col data-ca="ca" className="tag-img water" md="6">
       <Link to="/dashboard/water" style={{ textDecoration: "none" }}>
          <div className="cover ">
            {" "}
            <p>Lake</p>
          </div></Link>
        </Col>
        <Col className="tag-img snow" md="6">
        <Link to="/dashboard/snow" style={{ textDecoration: "none" }}>
          <div className="cover ">
            {" "}
            <p>Snow</p>
          </div></Link>
        </Col>{" "}
        <Col className="tag-img market" md="6">
        <Link to="/dashboard/market" style={{ textDecoration: "none" }}>
          <div className="cover ">
            {" "}
            <p>Market</p>
          </div></Link>
        </Col>
        <Col className="tag-img camping" md="6">
        <Link to="/dashboard/camping" style={{ textDecoration: "none" }}>
          <div className="cover ">
            {" "}
            <p>Camping</p>
          </div></Link>
        </Col>
        <Col className="tag-img ranch" md="6">
        <Link to="/dashboard/ranch" style={{ textDecoration: "none" }}>
          <div className="cover ">
            {" "}
            <p>Ranch</p>
          </div></Link>
        </Col>
        <Col className="tag-img asia" md="6">
        <Link to="/dashboard/asia" style={{ textDecoration: "none" }}>
          <div className="cover ">
            {" "}
            <p>Asia</p>
          </div></Link>
        </Col>
        <Col className="tag-img europe" md="6">
        <Link to="/dashboard/europe" style={{ textDecoration: "none" }}>
          <div className="cover ">
            {" "}
            <p>Europe</p>
          </div></Link>
        </Col>
        <Col className="tag-img africa" md="6">
        <Link to="/dashboard/africa" style={{ textDecoration: "none" }}>
          <div className="cover ">
            {" "}
            <p>Africa</p>
          </div></Link>
        </Col>
        <Col className="tag-img alaska" md="6">
        <Link to="/dashboard/alaska" style={{ textDecoration: "none" }}>
          <div className="cover ">
            {" "}
            <p>Alaska</p>
          </div></Link>
        </Col>
        <Col className="tag-img nz" md="6">
        <Link to="/dashboard/nz" style={{ textDecoration: "none" }}>
          <div className="cover ">
            {" "}
            <p>New Zeland</p>
          </div></Link>
        </Col>
      </Row>
    </Col>
  );
};
export default Tags;

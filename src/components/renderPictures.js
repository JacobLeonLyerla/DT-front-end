import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import imgs from "../assets/exportImgs.js";

class Pictures extends Component {
  renderPictures = () => {
    let arr = [];
    if (this.props.pictures !== undefined) {
      if (this.props.pictures.length > 0) {
        this.props.pictures.forEach(e => {
          arr.push(e.name);
        });
      }
    }
    if (this.props.imgTag !== undefined) {
      if (this.props.imgTag.length > 0) {
        arr = this.props.imgTag;
      }
    }
    if (arr.length > 0) {
      return arr.map(img => {
        return (
          <Col
            data-ca="ca"
            style={{
              backgroundImage: `url(${
                imgs[img.replace(/-/g, "").toLowerCase()]
              })`
            }}
            className={`tag-img tags`}
            md="6"
          >
            <Link
              to={`/dashboard/${img.toLowerCase()}`}
              style={{ textDecoration: "none" }}
            >
              <div className="cover ">
                {" "}
                <p>{img.replace(/-/g, " ")}</p>
              </div>
            </Link>
          </Col>
        );
      });
    } else {
    }
  };
  render() {
    return <Row className={`${this.props.style}`}>{this.renderPictures()}</Row>;
  }
}
export default Pictures;

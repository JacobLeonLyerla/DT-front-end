import React from "react";
import { Row, Col, Media } from "reactstrap";
import redforest from "../assets/red-forest.jpg";
import beachlove from "../assets/lovebeach.jpg";
import desertred from "../assets/desertred.jpg";

const About = () => {
  return (
      <div className="rowContainer">
        <Row className="aboutRow red">
          <Col md="12" lg="12" className="filter">
            <div className="aboutHeader">Forest</div>

            <p>
              Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex
              eam alia facete scriptorem, est autem aliquip detraxit at. Usu
              ocurreret referrentur at, cu epicurei appellantur vix. Cum ea
              laoreet recteque electram, eos choro alterum definiebas in. Vim
              dolorum definiebas an. Mei ex natum rebum iisque.
            </p>
          </Col>
        </Row>
        <Row className="aboutRow sea">
          <Col md="12" className="filter">
            <div className="aboutHeader">Beach</div>
            <p>
              Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex
              eam alia facete scriptorem, est autem aliquip detraxit at. Usu
              ocurreret referrentur at, cu epicurei appellantur vix. Cum ea
              laoreet recteque electram, eos choro alterum definiebas in. Vim
              dolorum definiebas an. Mei ex natum rebum iisque.
            </p>
          </Col>
        </Row>{" "}
        <Row className="aboutRow desert">
       
          <Col md="12" className="filter">
            <div className="aboutHeader">Desert</div>

            <p>
              Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex
              eam alia facete scriptorem, est autem aliquip detraxit at. Usu
              ocurreret referrentur at, cu epicurei appellantur vix. Cum ea
              laoreet recteque electram, eos choro alterum definiebas in. Vim
              dolorum definiebas an. Mei ex natum rebum iisque.
            </p>
          </Col>
        </Row>
      </div>
  );
};
export default About;

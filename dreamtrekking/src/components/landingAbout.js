import React from 'react';
import { Row, Col, Media } from "reactstrap";
import logo from "../assets/castle.jpg";

const About =()=>{

    return(
        <div className="sell">
        <Row>
            <Col md="3">
          <Media src={logo}  />
          </Col>
          <Col md ="9">
          <p>
            Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam
            alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret
            referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque
            electram, eos choro alterum definiebas in. Vim dolorum definiebas
            an. Mei ex natum rebum iisque.
          </p>
          </Col>
        </Row>
        <Row>
     
          <Col md ="9">
          <p>
            Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam
            alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret
            referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque
            electram, eos choro alterum definiebas in. Vim dolorum definiebas
            an. Mei ex natum rebum iisque.
          </p>
          </Col>
             <Col md="3">
          <Media src={logo} />
          </Col>
        </Row>{" "}
        <Row>
        <Col md="3">
          <Media src={logo} />
          </Col>
          <Col md ="9">
          <p>
            Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam
            alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret
            referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque
            electram, eos choro alterum definiebas in. Vim dolorum definiebas
            an. Mei ex natum rebum iisque.
          </p>
          </Col>
        </Row>
      </div>
    )
}
export default About;
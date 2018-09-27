import React from 'react';
import { Row, Col, Media } from "reactstrap";
import redforest from "../assets/red-forest.jpg";
import beachlove from '../assets/lovebeach.jpg';
import desertred from '../assets/desertred.jpg'

const About =()=>{

    return(
        <div className="sell">
        <br/>
        <div className="rowContainer">
        <Row>
            <Col md="3" lg='3'>
          <Media src={redforest}  />
          </Col>
          <Col md ="9"lg='9'>
          <div className="aboutHeader">Forest</div>
      
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
          <div className="aboutHeader">Beach</div>
          <p>
            Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam
            alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret
            referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque
            electram, eos choro alterum definiebas in. Vim dolorum definiebas
            an. Mei ex natum rebum iisque.
          </p>
          </Col>
             <Col md="3">
          <Media src={beachlove} />
          </Col>
        </Row>{" "}
        <Row>
        <Col md="3">
          <Media src={desertred} />
          </Col>
          <Col md ="9">
          <div className="aboutHeader">Desert</div>
          
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
      </div>
    )
}
export default About;
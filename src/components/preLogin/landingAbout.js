import React from "react";

import { Row, Col } from "reactstrap";

const About = () => {

  return (
    <div className="rowContainer">

      <Row className="aboutRow red">

        <Col md="12" lg="12" className="filter">

          {/* <div className="aboutHeader">Forest</div> */}

          <p>
            Explore the unknown, the green places of the world
            <br />

            Get back to center and find your next andventure <br />
            Where nature is around you. And where the stars shine brightest
          </p>

        </Col>

      </Row>

      <Row className="aboutRow sea">

        <Col md="12" className="filter">

          {/* <div className="aboutHeader">Beach</div> */}
          <p>
            The quite times await, visit the places off the beaten path
            <br />

            Take Joy in the rarely seen and serene places of the world
            <br />

            Make it a priority to see the places less visited
          </p>

        </Col>

      </Row>{" "}

      <Row className="aboutRow desert">

        <Col md="12" className="filter">

          {/* <div className="aboutHeader">Desert</div> */}

          <p>
            Marvel at the art of nature, see first hand the patterns of the
            world
            <br />
            
            Explore with a community. And see the world in new light
            <br />

            Welcome to Dreamtrekking, Enjoy the andventure
          </p>

        </Col>

      </Row>
    </div>
  );
};
export default About;

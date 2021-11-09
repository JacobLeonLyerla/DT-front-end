import React from 'react'

import {
    Col,
    CardImg,
    Card,
    CardImgOverlay,
    CardText,
  } from "reactstrap";
  import IMAGES from "../../assets/images.js";

const HeaderPicture = ({name}) => {
    const imgString = name.replace(/-/g, "").toLowerCase();
    
    return (
        
       
          <Col
          data-ca="ca"
         className="header-picture-col"
          md="6"
         
        >
          <Card className="header-picture-card"
       
          >
        
              <div>

                <CardImg
                  alt="Card image cap"
                  src={imgString.split(".").reduce((o, i) => o[i], IMAGES)}
                  top
                  width="100%"
                />
                <CardImgOverlay>
                  <CardText className="header-picture-text" >
                  {name.replace(/-/g, " ")}
                  </CardText>
                </CardImgOverlay>
              </div>
          
          </Card>
        </Col>

    )
}

export default HeaderPicture

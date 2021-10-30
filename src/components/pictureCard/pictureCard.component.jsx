import React from 'react'
import IMAGES from "../../assets/images.js";
import AppContext from "../../context";
import { useContext } from 'react';
import {
    Col,
    CardImg,
    Card,
    CardImgOverlay,
    CardText,
  } from "reactstrap";
  import { Link } from "react-router-dom";
const PictureCard = ({img,pictureStyle}) => {
  const { getCurrentPicture } = useContext(AppContext);
    const imgString = img.replace(/-/g, "").toLowerCase();
    return (
        // we use a column with an inline style for the background
        // we also use our img function to import the imgages by their name
        //hoever we have to remove any dashes that were on the names in the database
        
       
        <Col
          data-ca="ca"
          className={`tag-img tags`}
          md="6"
         
        >
          <Card  className={`tag-img tags`}
           onClick={()=>getCurrentPicture(img.toLowerCase())}
          >
            <Link
              to={`/dashboard/${img.toLowerCase()}`}
              style={{ textDecoration: "none" }}
            >
              <div className="cover ">

                <CardImg
                  className={`tag-img tags`}
                  alt="Card image cap"
                  src={imgString.split(".").reduce((o, i) => o[i], IMAGES)}
                  top
                  width="100%"
                />
                <CardImgOverlay>
                  <CardText >
                  {img.replace(/-/g, " ")}
                  </CardText>
                </CardImgOverlay>
              </div>
            </Link>
          </Card>
        </Col>

      );
    
}

export default PictureCard

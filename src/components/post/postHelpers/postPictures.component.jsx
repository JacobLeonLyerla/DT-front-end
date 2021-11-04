import React,{useContext} from 'react'


import IMAGES from "../../../assets/images"

import AppContext from '../../../context/index.js';
import {
    Col,
    CardImg,
    Card,
    CardImgOverlay,
    CardText,
  } from "reactstrap";
import filterTags from './filterTags.js';
import checked from './checked.js';
const PostPictures = ({img}) => {
  const { getCurrentPicture,filteredTagsArr,setFilteredTagsArr } = useContext(AppContext);
    const imgString = img.replace(/-/g, "").toLowerCase();
    return (
        // we use a column with an inline style for the background
        // we also use our img function to import the imgages by their name
        //hoever we have to remove any dashes that were on the names in the database
        
       
        <Col
          data-ca="ca"
          className={`tag-img tags`}
          onClick={() => setFilteredTagsArr(filterTags(img,filteredTagsArr)) }
          
          md="6"
         
        >
           
          <Card  className={`tag-img tags `}
           onClick={()=>getCurrentPicture(img.toLowerCase())}
          > 
       
              <div className="cover">

                <CardImg
                  className={`tag-img tags tag-img-${filteredTagsArr.includes(img)? "checked":""}`}
                  alt="Card image cap"
                  src={imgString.split(".").reduce((o, i) => o[i], IMAGES)}
                  top
                  width="100%"
                />
                <CardImgOverlay>
                  <CardText  className="card-fade">
                  {img.replace(/-/g, " ")}
                  </CardText>
                </CardImgOverlay>
              </div>
         
          </Card>
        </Col>

      );
    
}

export default PostPictures

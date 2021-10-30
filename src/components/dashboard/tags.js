import React, { useContext,useEffect } from "react";

import { Col } from "reactstrap";

import Pictures from "./renderPictures.js";
 import AppContext from "../../context/index.js";
const Tags= (props)=> {
  const {example,getPictures} = useContext(AppContext);
    let pictures = []
  useEffect(() => {
      pictures = getPictures()
  }, [])
  
  
  return(
      // this column is part of the row with dashboard
      // and will be sized based on the variables passed in on props
      <Col md={`${10 + props.tagVar}`} className="tags-container">
        {/* we already had the pictures, sent in as props.
      pictures are just the categories that load in.
      so we pass them into our pictures component and it renders them for us
      neat right!? */}
        <Pictures pictures={example} />
      </Col>
    );}

export default Tags;

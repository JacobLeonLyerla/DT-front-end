import React, { useContext } from "react";
import AppContext from "../../context";

import { Col, Row } from "reactstrap";
import Details from "../dashboard/tagDetails";
import PictureCard from "../pictureCard/pictureCard.component";
import TagComments from "../comments/tagComments.compnent";
const CommentContainer = () => {
  const {currentTag } = useContext(AppContext);
  let setTag =  { tag: ["placeholder", "placeholder"] };
  if(currentTag){
    setTag = currentTag
  }
  const { tag } = setTag 
  return (
    // like dashboard this column is inside of our row and the size will change
    // based on the variables passed in with props
    <Col className="table-container" md="10">
      <Details />
      <TagComments/>
      <Row className="tag-filtered">
        {tag.map((img) => {
          return <PictureCard img={img} pictureStyle="tag-filtered" />;
        })}
      </Row>
    </Col>
  );
};

export default CommentContainer;

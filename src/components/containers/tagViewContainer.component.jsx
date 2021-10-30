import React, { useContext,useEffect } from "react";
import RenderTags from "../tagView/renderTags.component";
import Maps from "../dashboard/googleMaps";

import { Col, Row } from "reactstrap";
import PictureCard from "../pictureCard/pictureCard.component";
import AppContext from "../../context";
import { withRouter } from "react-router";
import TableContainer from "../tableContainer/tabelContainer.component";
const TagViewContainer = ({match}) => {

  const { example,tags,getTags,currentPicture,getCurrentPicture } = useContext(AppContext);
  
  const setPicture = currentPicture[0]
  const { tag } = setPicture ?setPicture:example[0]
  useEffect(() => {
   
    const {id}=match.params
     console.log(id)
    getTags(id)
    getCurrentPicture(id)
}, [])
  return (
    <Col className="table-container col-md-10">
       {tags.length!==0?<TableContainer colOneLabel="Title" colTwoLabel="Location" colThreeLabel="Tags" />:null}
      <Row className="tag-filtered">
     
        {tag.map((img) => {
          return <PictureCard img={img} pictureStyle="tag-filtered" />;
        })}
      </Row>
    </Col>
  );
};

export default withRouter(TagViewContainer);

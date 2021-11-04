import React, { useContext,useEffect } from "react";
import RenderTags from "../tagView/renderTags.component";
import Map from "../dashboard/map";
import { Col, Row } from "reactstrap";
import PictureCard from "../pictureCard/pictureCard.component";
import AppContext from "../../context";
import { withRouter } from "react-router";
import TableContainer from "./tabelContainer.component";
import Post from "../post/post.component"
const TagViewContainer = ({match}) => {
const {id}=match.params
  const {tags,getTags,currentPicture,getCurrentPicture,loadUser } = useContext(AppContext);
  
  
  const setPicture =  currentPicture

  const { tag } =  setPicture ?setPicture:{tag:["placeholder","placeholder",]}

  useEffect(() => {
    getTags(id)
    getCurrentPicture(id)
    loadUser()
}, [])

 

  return (
    <Col className="table-container col-md-10">
      <Post/>
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

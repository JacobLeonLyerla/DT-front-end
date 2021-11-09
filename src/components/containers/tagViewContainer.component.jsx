import React, { useContext,useEffect } from "react";
import RenderTags from "../tagView/renderTags.component";
import Map from "../googleMaps/map.component"
import { Col, Row } from "reactstrap";
import PictureCard from "../pictureCard/pictureCard.component";
import AppContext from "../../context";
import { withRouter } from "react-router";
import TableContainer from "./tabelContainer.component";
import Post from "../post/post.component"
import HeaderPicture from "../headerPicture/headerPicture.component";
const TagViewContainer = ({match}) => {
const {id}=match.params
  const {tags,getTags,currentPicture,getCurrentPicture,loadUser } = useContext(AppContext);
  
  
  let setPicture =  currentPicture

  const { tag } = setPicture ?setPicture:{tag:["placeholder","placeholder",]}

  useEffect(() => {
    getTags(id)
    getCurrentPicture(id)
    loadUser()
}, [])
if(!currentPicture){
  setPicture= {}
}
  return (<>{currentPicture?
    <Col className="table-container col-md-10">
     {setPicture.hasOwnProperty("lat")?<Map current={currentPicture} type="picture"/>:<HeaderPicture name={setPicture.name}/>}
      <Post/>
       {tags.length!==0?<TableContainer colOneLabel="Title" colTwoLabel="Location" colThreeLabel="Tags" type="Tag" />:null}
      <Row className="tag-filtered">
       
        {tag.sort().map((img) => {
          return <PictureCard img={img} pictureStyle="tag-filtered" />;
        })}
      </Row>
    </Col>:null}</>
  );
};

export default withRouter(TagViewContainer);

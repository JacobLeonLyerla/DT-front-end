import React, { useContext,useEffect, } from "react";
import AppContext from "../../context";
import Map from "../googleMaps/map.component";
import { Col, Row } from "reactstrap";
import Details from "../dashboard/tagDetails";
import PictureCard from "../pictureCard/pictureCard.component";
import TagComments from "../comments/tagComments.compnent";
import HeaderPicture from "../headerPicture/headerPicture.component";
import { withRouter } from "react-router";
import { Button } from "reactstrap";
import { Redirect } from 'react-router-dom';

const CommentContainer = ({match,histroy}) => {
  const {currentTag,getTagById,user,deleteTag } = useContext(AppContext);
  let setTag =  { tag: ["placeholder", "placeholder"] };
  useEffect(() => {
    const {id} =match.params;
    getTagById(id)
 
  }, [])
  if(currentTag){
    setTag = currentTag
  }
  const { tag } = setTag 
  const deleteAndDirect =()=>{

   const didDelete=deleteTag(currentTag._id)

  return history.back()
  }

  return (
    
    // like dashboard this column is inside of our row and the size will change
    // based on the variables passed in with props
 <> {currentTag? <Col className="table-container" md="10">
          {currentTag.hasOwnProperty("lat")?  <Map current={currentTag}/>:<HeaderPicture name={currentTag.name}/> }
      
 {user.username===currentTag.user?<span className="delete-tag"> <Button  className="delete-tag-button" onClick={()=>deleteAndDirect()} >Delete Post</Button>
    </span>:null}  <Details />
      <TagComments/>
      <Row className="tag-filtered">
        {tag.map((img) => {
          return <PictureCard img={img} pictureStyle="tag-filtered" />;
        })}
      </Row>
    </Col>:""}</>
  );
};

export default withRouter(CommentContainer);

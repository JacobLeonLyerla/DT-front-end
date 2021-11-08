import React, { useContext } from "react";

import {
  Button,
  Col,
  Row,
} from "reactstrap";
import AppContext from "../../context/index.js";
import PostForm from "./postForm.component";
import PostPictures from "./postHelpers/postPictures.component";
const CreatePost = () => {
  const { pictures,handlePost,filteredTagsArr } = useContext(AppContext);
  const pictureArr = pictures.map((picture) => picture.name);

  return (
    <Col md="10" className="tags-container"><PostForm/>
      <Button onClick={()=>handlePost()} className="create-button">Create New Post</Button>
    
      <Row className="tag-filtered">
        {pictureArr.map((img) => {
          return <PostPictures img={img} pictureStyle="tag-filtered" onClick={()=>CreatePost(img,filteredTagsArr)} />;
        })}
      </Row>
    </Col>
  );
};

export default CreatePost;

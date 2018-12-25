import React, { Component, Fragment } from "react";
import { Button,Col,Row,Badge  } from "reactstrap";
import axios from "axios";
import {Link} from "react-router-dom"
import imgs from "../assets/exportImgs.js" 
class Post extends Component {
  state = {
    test: {},
    tags:[]
  };
  componentDidMount() {
    let { id } = this.props.match.params;
    this.fetchTags();
  }
  fetchTags = () => {};
  renderPictures =()=>{
    let arr = [];
    if(this.props.pictures !== undefined){
    if(this.props.pictures.length >0){   
        this.props.pictures.forEach(e=>{
            arr.push(e.name)
        })
    } 
}
    if(this.props.imgTag !== undefined){
    if(this.props.imgTag.length >0){
       arr = this.props.imgTag
    }
}
    if(arr.length >0){
      return arr.map(img =>{
   
      return(<Col data-ca="ca" onClick={()=>this.filterTags(img)} style={{backgroundImage : `url(${imgs[img.replace(/-/g, '').toLowerCase()]})`}} className={`tag-img tags`} md="6">
      
          <div className={`cover ${this.checked(img)}`}>
            {" "}
            <p>{img.replace(/-/g, ' ')}</p>
          </div>
        </Col>
        )})
  }
}
checked =(id)=>{
    
    let filteredArr = this.state.tags.filter(function(value, index, arr){

        return value !== id;
    
    });
    if(filteredArr.length < this.state.tags.length){
        return "checked"
    }
}
filterTags(id){
    let arr = this.state.tags

    let filteredArr = arr.filter(function(value, index, arr){

        return value !== id;
    
    });
    if(filteredArr.length === arr.length){
        filteredArr.push(id)
    }
    
this.setState({tags:filteredArr})
}
renderPickedTags =()=>{
    if(this.state.tags.length >0){
        return this.state.tags.map(tag=>(
        <Badge onClick={()=>this.filterTags(tag)}>{tag}</Badge>
        ))
    }
}
  render() {
    return (
      
          <Col md={`${10 + this.props.tagVar}`} className="tags-container">
          <div className="tag-badge">
          {this.renderPickedTags()}</div>
          <Row>
   {this.renderPictures()}</Row>
   
   </Col>
     
    );
  }
}
export default Post;

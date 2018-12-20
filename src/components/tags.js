import React,{Component} from "react";
import { Row, Col } from "reactstrap";
import {Link} from "react-router-dom"
import imgs from "../assets/exportImgs.js" 
class Tags extends Component {


  renderTags =()=>{
    if(this.props.pictures.length >0){
      return this.props.pictures.map(img =>{
   
      return(<Col data-ca="ca" style={{backgroundImage : `url(${imgs[img.name.replace(/-/g, '').toLowerCase()]})`}} className={`tag-img tags`} md="6">
       <Link to={`/dashboard/${img.name.toLowerCase()}`} style={{ textDecoration: "none" }}>
          <div className="cover ">
            {" "}
            <p>{img.name.replace(/-/g, ' ')}</p>
          </div></Link>
        </Col>
        )})
  }else{

  }
}
  render(){
  return (
    <Col md={`${10 + this.props.tagVar}`} className="tags-container">
      <Row>
      {this.renderTags()}
      </Row>
    </Col>
  );
  }
};
export default Tags;

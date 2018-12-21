import React, { Component } from "react";
import axios from "axios";
import { Table, Row, Col } from "reactstrap";
import imgs from "../assets/exportImgs.js" 
import { Link } from "react-router-dom";

import Pictures from "./renderPictures.js"

class TagView extends Component {
  state = {
    test: [{ tag: "" }],
    tag: "",
    flag:false,
    picture:[{name:"pat"}],
    imgTag:[],
    imgName:""
  };
  componentDidMount() {
    this.loadinfo();
  }
  loadinfo = () => {
    const token = localStorage.getItem("token");

    const authToken = `${token}`;

    const requestOptions = {
      headers: {
        Authorization: authToken
      }
    } 
    axios
      .get("https://dt-back-end.herokuapp.com/tags", requestOptions)
      .then(response => {
        let tagArr =[];
          response.data.forEach(e => {
            for (let i = 0; i < e.tag.length; i++) {
              if(e.tag[i].toLowerCase() === this.state.tag.toLowerCase()){
               tagArr.push(e)
              }
              
            }
          });

        this.setState({ test:tagArr });
      })
      .catch(err => {
        this.props.history.push("/");

      });
      axios
      .get("https://dt-back-end.herokuapp.com/pictures", requestOptions)
      .then(response => {
        let pictureArr =[];
          response.data.forEach(e => {
            
         
              if(e.name.toLowerCase() === this.state.tag.toLowerCase()){
               pictureArr.push(e)
            }
          });
          let tag = pictureArr[0].tag
          let name = pictureArr[0].name
        this.setState({ picture:pictureArr,imgTag:tag,imgName:name });
      })
      .catch(err => {

        this.props.history.push("/dashboard");

      });
    };
  userSubmissionTable = () => {
    return this.state.test.map(sub => (
      <tbody>
         <Link style={{ textDecoration: "none", color:"black" }} to={`/dashboard/trek/${sub._id}`}><tr>
          <td>{sub.name}</td>
          <td>{sub.city}</td>
          <td>{sub.country}</td>
          {this.renderTags(sub.tag)}
        </tr></Link>
      </tbody>
    ));
  };
  renderTags = tag => {
    if (tag.length < 1) {
      tag = [];
    }
    if (tag !== undefined || tag !== "") {
      return (
        <td className="tag-container">
          {" "}
          {tag.map(tag => (
            <div className="tag">
              {`${tag}`}
              <br />
            </div>
          ))}
        </td>
      );
    }
  };

  setTag = () => {
    if (this.state.tag === "") {
      let { id } = this.props.match.params;
      this.setState({ tag: id });
    }
  };
  renderTable = () => {
    return (
      <Table hover>
        <thead className="thead">
         <tr className="tr">
            <th className="th">Name</th>
            <th className="th">City</th>
            <th className="th">Country</th>
            <th className="th">Tags</th>
          </tr>
        </thead>
        <div className="table-items">{this.userSubmissionTable()}</div>
      </Table>
    );
  };
  checkp = ()=>{
    if(this.props.match.params.id !== this.state.tag){
      this.setState({tag:this.props.match.params.id})
          this.loadinfo()
      
    }
  }
  renderMainImgs=(img)=>{
    let arr =[]
    if(Array.isArray(img) === false){
      arr.push(img)
    }else{
      arr= img
    }
   
     return arr.map(img =>{
       let test ;
       return(
      <Col data-ca="ca" style={{backgroundImage : `url(${imgs[img.replace(/-/g, '').toLowerCase()]})`}} className={`tag-img tags`} md="6">
      <Link onClick={()=>this.checkp()} to={`/dashboard/${img.toLowerCase()}`} style={{ textDecoration: "none" }}>
        <div onClick={()=>this.checkp()} className="cover ">
          <p>{img.replace(/-/g, ' ')}</p>
        </div>
      </Link>
    </Col>

      )})
     
  }
 

  render() {
  
    return (
      <Col className="table-container" md={`${10 + this.props.tagVar}`}>
      
        {this.checkp()}
        {this.setTag()}
        <div className="google">
          <p>Google Placeholder</p>
        </div>
        {this.renderTable()}
       <Pictures imgTag={this.state.imgTag} style="tag-filtered"/> 
      </Col>
    );
  }
}
export default TagView;

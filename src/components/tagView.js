import React, { Component } from "react";
import axios from "axios";
import { Table, Row, Col, Button } from "reactstrap";
import imgs from "../assets/exportImgs.js";
import { Link } from "react-router-dom";
import Map from "./googleMaps";
import Pictures from "./renderPictures.js";

class TagView extends Component {
  state = {
    test: [{ tag: "" }],
    tag: "",
    flag: false,
    picture: [{ name: "pat" }],
    imgTag: [],
    imgName: ""
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
    };
    axios
      .get("https://dt-back-end.herokuapp.com/tags", requestOptions)
      .then(response => {
        let tagArr = [];
        response.data.forEach(e => {
          for (let i = 0; i < e.tag.length; i++) {
            if (e.tag[i].toLowerCase() === this.state.tag.toLowerCase()) {
              tagArr.push(e);
            }
          }
        });

        this.setState({ test: tagArr });
      })
      .catch(err => {
        this.props.history.push("/");
      });
    axios
      .get("https://dt-back-end.herokuapp.com/pictures", requestOptions)
      .then(response => {
        let pictureArr = [];
        response.data.forEach(e => {
          if (e.name.toLowerCase() === this.state.tag.toLowerCase()) {
            pictureArr.push(e);
          }
        });
        let tag = pictureArr[0].tag;
        let name = pictureArr[0].name;
        this.setState({ picture: pictureArr, imgTag: tag, imgName: name });
      })
      .catch(err => {
        this.props.history.push("/dashboard");
      });
  };
  userSubmissionTable = () => {
    return this.state.test.map(sub => (
       
          <tr>
            <td>{sub.name}</td>
            <td>{sub.city}</td>
            <td>{sub.country}</td>
            {this.renderTags(sub.tag)}
          </tr>
     
    ));
  };
  renderRoute =(id,type)=>{
    if(type ==="create"){
      this.props.history.push(`/dashboard/create/${this.state.tag}`)
    }else{
    this.props.history.push(`/dashboard/trek/${id}`)
  }}
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
              {`${tag.replace(/-/g, " ")}`}
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

  checkp = () => {
    if (this.props.match.params.id !== this.state.tag) {
      this.setState({ tag: this.props.match.params.id });
      this.loadinfo();
    }
  };
  renderMainImgs = img => {
    let arr = [];
    if (Array.isArray(img) === false) {
      arr.push(img);
    } else {
      arr = img;
    }

    return arr.map(img => {
      let test;
      return (
        <Col
          data-ca="ca"
          style={{
            backgroundImage: `url(${imgs[img.replace(/-/g, "").toLowerCase()]})`
          }}
          className={`tag-img tags`}
          md="6"
        >
          <Link
            onClick={() => this.checkp()}
            to={`/dashboard/${img.toLowerCase()}`}
            style={{ textDecoration: "none" }}
          >
            <div onClick={() => this.checkp()} className="cover ">
              <p>{img.replace(/-/g, " ")}</p>
            </div>
          </Link>
        </Col>
      );
    });
  };

  render() {
    return (
      <Col className="table-container" md={`${10 + this.props.tagVar}`}>
        <Map />
        {this.checkp()}
        {this.setTag()}
        <Button onClick={()=>this.renderRoute(this.state.tag,"create")}>New Post</Button>  
        <Table >
        <thead>
          <tr >
            <th >Name</th>
            <th >City</th>
            <th >Country</th>
            <th >Tags</th>
          </tr>
        </thead> 
       
        <tbody> 
         
                
        
        {this.userSubmissionTable()}</tbody>
        </Table>
        <Pictures imgTag={this.state.imgTag} style="tag-filtered" />
      </Col>
    );
  }
}
export default TagView;

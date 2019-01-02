import React, { Component } from "react";
import axios from "axios";
import { Table, Row, Col, Button } from "reactstrap";
import imgs from "../../assets/exportImgs.js";
import { Link } from "react-router-dom";
import Map from "./googleMaps";
import Pictures from "./renderPictures.js";

class TagView extends Component {
  state = {
    test: [{ tag: "" }],
    tag: "",
    flag: false,
    picture: [],
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
      <div
        onClick={() => this.renderRoute(sub._id)}
        className="td-container"
        style={{ display: "flex", flexDirection: "row" }}
      >
        <div className="td">{sub.name}</div>
        <div className="td">{sub.city}</div>
        <div className="td">{sub.country}</div>
        {this.renderTags(sub.tag)}
      </div>
    ));
  };
  renderRoute = (id, type) => {
    if (type === "create") {
      this.props.history.push(`/dashboard/create/${this.state.tag}`);
    } else {
      this.props.history.push(`/dashboard/trek/${id}`);
    }
  };
  renderTags = tag => {
    if (tag.length < 1) {
      tag = [];
    }
    if (tag !== undefined || tag !== "") {
      return (
        <div className="td tag">
          {" "}
          {tag.map(tag => (
            <div className="tags">
              {`${tag.replace(/-/g, " ")}`}
              <br />
            </div>
          ))}
        </div>
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
        
        {this.checkp()}
        {this.setTag()}
        <Map picture={this.state.picture}/>
        <Button onClick={() => this.renderRoute(this.state.tag, "create")}>
          New Post
        </Button>
        <Table className="tags-table">
          <div className="tr">
            <div className="name head">Name</div>
            <div className="city head">City</div>
            <div className="country head">Country</div>
            <div className="tags head">Tags</div>
          </div>

          <div className="tbody">
            <div>{this.userSubmissionTable()}</div>
          </div>
        </Table>
        <Pictures imgTag={this.state.imgTag} style="tag-filtered" />
      </Col>
    );
  }
}
export default TagView;

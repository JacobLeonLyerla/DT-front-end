import React, { Component, Fragment } from "react";
import { Col, Table } from "reactstrap";
import axios from "axios";
import { Link } from "react-router-dom";
class Post extends Component {
  renderPost = () => {
    let arr = this.sortPost();
    return arr.map(post => (
      <div
        onClick={() => this.renderRoute(post._id)}
        className={
          post.unreadComment + post.unreadLike > 0
            ? "td-container notify"
            : "td-container no-notify"
        }
        style={{display:"flex",flexDirection:"row"}}
      >
        <div className="td" style={{fontSize:"1.3rem",width:"20%"}}>{post.unreadComment + post.unreadLike}</div>
        <div className="td" style={{fontSize:"1.3rem",width:"20%"}}>{post.name}</div>
        <div className="td" style={{fontSize:"1.3rem",width:"20%"}}>{post.city}</div>
        {this.renderTags(post.tag)}
      </div>
    ));
  };
  renderRoute = id => {
    let reset = {};
    reset.unreadComment = 0;
    reset.unreadLike = 0;

    axios
      .put(`https://dt-back-end.herokuapp.com/tags/${id}`, reset)
      .then(response => {
        this.props.loadUser();
        this.props.history.push(`/dashboard/trek/${id}`);
      })
      .catch(err => {});
  };
  renderTags = tag => {
    if (tag.length < 1) {
      tag = [];
    }
    if (tag !== undefined || tag !== "") {
      return (
        <div className="tag td" style={{fontSize:"1.3rem",width:"20%"}}>
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
  sortPost = () => {
    let notifyArr = [];
    let oldArr = [];
    if (this.props.post !== undefined) {
      this.props.post.forEach(post => {
        if (post.unreadComment + post.unreadLike > 0) {
          notifyArr.push(post);
        } else {
          oldArr.push(post);
        }
      });
      let arr = [...notifyArr, ...oldArr];
      return arr;
    }
  };
  render() {
    return (
      <Col className="table-container" md={`${10 + this.props.tagVar}`}>
        <Table className="tags-table">
          <div>
            <div className="tr">
              <div className="notification head" style={{width:"20%"}}>Notifications</div>
              <div className="head" style={{width:"20%"}}>First Name</div>
              <div className="head" style={{width:"20%"}}>Last Name</div>
              <div className="head" style={{width:"20%"}}>Username</div>
            </div>
          </div>
          <div>{this.renderPost()}</div>
        </Table>
      </Col>
    );
  }
}
export default Post;

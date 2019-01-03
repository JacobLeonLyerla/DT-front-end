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
        style={{ display: "flex", flexDirection: "row" }}
      >
        <div className="td">{post.unreadComment + post.unreadLike}</div>
        <div className="td">
          {post.locationName ? (
            <Fragment>{post.locationName}</Fragment>
          ) : (
            <Fragment>null</Fragment>
          )}
        </div>
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
        <div className="tag td">
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
      <Col
        className="table-container post-container"
        md={`${10 + this.props.tagVar}`}
      >
        <Table className="tags-table post-table">
          <div>
            <div className="tr">
              <div className="notification head post-head">Notifications</div>
              <div className="head post-head">Location</div>

              <div className="head post-head">Tags</div>
            </div>
          </div>
          <div>{this.renderPost()}</div>
        </Table>
      </Col>
    );
  }
}
export default Post;

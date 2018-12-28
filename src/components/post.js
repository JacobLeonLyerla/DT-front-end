import React, { Component, Fragment } from "react";
import { Col, Table } from "reactstrap";
import { Link } from "react-router-dom";
class Post extends Component {
  renderPost = () => {
    let arr = this.sortPost();
    return arr.map(post => (
     
       <tr onClick={()=>this.renderRoute(post._id)}
          className={
            post.unreadComment + post.unreadLike > 0 ? "tr notify" : "tr no-notify"
          }
        >
          <td >{post.unreadComment + post.unreadLike}</td>
          <td>{post.name}</td>
          <td>{post.city}</td>
          {this.renderTags(post.tag)}
        </tr>
     
    ));
  };
renderRoute =(id)=>{
this.props.history.push(`/dashboard/trek/${id}`)
}
  renderTags = tag => {
    if (tag.length < 1) {
      tag = [];
    }
    if (tag !== undefined || tag !== "") {
      return (
        <td className="tag-container">
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
  sortPost = () => {
    let notifyArr = [];
    let oldArr = [];
    if(this.props.post !== undefined){
    this.props.post.forEach(post => {
      if (post.unreadComment + post.unreadLike > 0) {
        notifyArr.push(post);
      } else {
        oldArr.push(post);
      }
    });
    let arr = [...notifyArr, ...oldArr];
    return arr;
  }};
  render() {
    return (
      <Col className="table-container" md={`${10 + this.props.tagVar}`}>
        <Table >
          <thead>
            <tr>
              <th>Notifications</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>{this.renderPost()}</tbody>
        </Table>
      </Col>
    );
  }
}
export default Post;

// here is where we will render the commetns and set up all the puts and stuff to maintain them

import React, { Component, Fragment } from "react";
import { Button, Input, Form, Row, Col } from "reactstrap";
import axios from "axios";
import Edit from "./edit";
import Reply from "./reply";
import Replies from "./replies"
class Comments extends Component {
  state = { comment: "",comments:{} };

  setupComments=(id)=>{
       axios
    .get(`https://dt-back-end.herokuapp.com/tags/${id}`)
    .then(response => {
        console.log(response.data)
      this.setState({ comments: response.data.comments });
    })
    .catch(err => {
        console.log(err)
    });
  }
  renderComments = () => {
      let arr;
    if (this.props.comments !== undefined) {
      if (this.props.comments.length > 0) {
          if(this.state.comments.length >0){
              console.log(this.state.comments)
            arr = this.state.comments
          }else{
              arr =this.props.comments
          }
        return arr.map(comment => {
          return (
            <div className="comment-container">
              {comment.username !== this.props.user.username ? (
                <Fragment>
                  <Reply
                    reply={comment.replyTo}
                    id={comment._id}
                    username={comment.username}
                    replies={comment.replies}
                    user={this.props.user}
                    renderComments={this.renderComments}
                    setupComments={this.setupComments}
                    propsId={this.props.tagId}
                  />
                  <div className="username">{comment.username}</div>
                </Fragment>
              ) : (
                <Fragment>
                  <Edit id={comment._id} />
                  <div className="username">You Commented</div>
                </Fragment>
              )}
              <div className="comment">{comment.comment}</div><div className="replies"><Replies  user={this.props.user} replies={comment.replies} id={comment._id}/></div>
            </div>
          );
        });
      } else {
        return <div className="no-comments">No comments yet</div>;
      }
    }
  };
  
  handleInput = input => {
    this.setState({ [input.target.name]: input.target.value });
  };
  handleSubmit = () => {
    let comment = {};
    if (this.state.comment !== "") {
      comment.comment = this.state.comment;
      comment.username = this.props.user.username;
    }
    axios
      .post("https://dt-back-end.herokuapp.com/comments", comment)
      .then(response => {
        let comment = {};
        comment.comments = this.props.comments;
        comment.comments.push(response.data._id);
        axios
          .put(
            `https://dt-back-end.herokuapp.com/tags/${this.props.tagId}`,
            comment
          )
          .then(response => {
            this.setState({ comment: "" });
            console.log(this.props.tagId)
            this.props.setTags(this.props.tagId);
          })
          .catch(err => {});
      })
      .catch(err => {});
  };
  render() {
    return (
      <Fragment>
        <div className="comments-container">{this.renderComments()}</div>
        <Form className="comment-form">
          <Button onClick={() => this.handleSubmit()} color="primary">
            Post
          </Button>
          <Input
            name="comment"
            value={this.state.comment}
            onChange={this.handleInput}
            type="textarea"
            style={{ height: "10vh" }}
          />
        </Form>
      </Fragment>
    );
  }
}
export default Comments;

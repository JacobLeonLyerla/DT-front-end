// here is where we will render the commetns and set up all the puts and stuff to maintain them

import React, { Component, Fragment } from "react";
import { Button, Input, Form } from "reactstrap";
import axios from "axios";
import Edit from "./edit";
import Reply from "./reply";
import Replies from "./replies";

class Comments extends Component {
  state = { comment: "", comments: {}, reply: false };
  // setting up our comments
  setupComments = id => {
    // we grab the post by the post id
    axios
      .get(`https://dt-back-end.herokuapp.com/tags/${id}`)
      .then(response => {
        this.setState({ comments: response.data.comments });
      })
  };
  // reply flag is for re-rendering the comments when the type passed in is true
  // it sets the reply on state to true, we use that reply flag to gate rendering for other functions
  replyflag = type => {
    if (type === "true") {
      this.setState({ reply: true });
    } else {
      this.setState({ reply: false });
    }
  };

  renderComments = () => {
    // set up an array variable
    let arr;
    // we have to make sure it's not undefined before excuting the code inside
    if (this.props.comments !== undefined) {
      // when the comments on props is greater than zero load this
      if (this.props.comments.length > 0) {
        // when the comments on state is greater than 0
        // if not we set arr based on props
        if (this.state.comments.length > 0) {
          arr = this.state.comments;
        } else {
          arr = this.props.comments;
        }
        return arr.map(comment => {
          return (
            <div className="comment-container">
              {comment.username !== this.props.user.username ? (
                <Fragment>
                  <Reply
                    tag={this.props.tag}
                    reply={this.state.reply}
                    replyflag={this.replyflag}
                    reply={comment.replyTo}
                    id={comment._id}
                    username={comment.username}
                    replies={comment.replies}
                    user={this.props.user}
                    renderComments={this.renderComments}
                    setupComments={this.setupComments}
                    setTags={this.props.setTags}
                    propsId={this.props.tagId}
                  />
                  <div className="username">{comment.username}</div>
                </Fragment>
              ) : (
                <Fragment>
                  <Edit
                    id={comment._id}
                    comment={comment}
                    setupComments={this.setupComments}
                    propsId={this.props.tagId}
                    replyflag={this.replyflag}
                  />
                  <div className="username">You Commented</div>
                </Fragment>
              )}
              <div className="comment">{comment.comment}</div>
              <div className="replies">
                <Replies
                  reply={this.state.reply}
                  replyflag={this.replyflag}
                  propsId={this.props.tagId}
                  setupComments={this.setupComments}
                  user={this.props.user}
                  replies={comment.replies}
                  id={comment._id}
                />
              </div>
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
    this.props.setTags(this.props.tagId);
    let comment = {};
    if (this.state.comment !== "") {
      comment.comment = this.state.comment;
      comment.username = this.props.user.username;
    }

    axios
      .post("https://dt-back-end.herokuapp.com/comments", comment)
      .then(response => {
        console.log(response.data);
        let comment = {};
        comment.comments = this.props.comments;
        comment.comments.push(response.data._id);

        axios
          .get(`https://dt-back-end.herokuapp.com/tags/${this.props.tagId}`)
          .then(response => {
            let unread;
            if (this.props.tag.user !== this.props.user.username) {
              unread = response.data.unreadComment + 1;
            } else {
              unread = response.data.unreadComment;
            }
            comment.unreadComment = unread;
            axios
              .put(
                `https://dt-back-end.herokuapp.com/tags/${this.props.tagId}`,
                comment
              )
              .then(response => {
                this.setState({ comment: "" });
                this.setupComments(this.props.tagId);
                this.props.setTags(this.props.tagId);
              })
          }) 
      })
      
  };
  render() {
    return (
      <Fragment>
        <div className="comments-container">{this.renderComments()}</div>
        <Form className="comment-form">
          <Button
            className="btn-post"
            onClick={() => this.handleSubmit()}
            color="primary"
          >
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

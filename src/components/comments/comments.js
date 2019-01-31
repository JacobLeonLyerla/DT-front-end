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
    let array;
    // we have to make sure it's not undefined before excuting the code inside
    if (this.props.comments !== undefined) {
      // when the comments on props is greater than zero load this
      if (this.props.comments.length > 0) {
        // when the comments on state is greater than 0
        // if not we set arr based on props
        if (this.state.comments.length > 0) {
          array = this.state.comments;
        } else {
          array = this.props.comments;
        }
        // iterate over the array we pulled off of state or off of props
        return array.map(comment => {
          return (

            // this is the container that holds each comment
            <div className="comment-container">
             {/* when the username does not match the loged in user name than the reply component is rendered
             we pass in the needed props for our reply to work.

              if it does match we render our edit and delete components and pass in the props for them
          
            */}
              {comment.username !== this.props.user.username ? (
                <Fragment>
                  <Reply
                    tag={this.props.tag}
                    reply={this.state.reply}
                    replyflag={this.replyflag}
                    replyTo={comment.replyTo}
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
 // this is an handle input function that takes our name and value from the inpute target and sets it on state
  handleInput = input => {
    this.setState({ [input.target.name]: input.target.value });
  };
  // this is for handling the submit of a comment 
  handleSubmit = () => {
    // when we hit submit we call this function to render out the new data
    this.props.setTags(this.props.tagId);
    // set up an empty object
    let comment = {};
    // if the state comment is not an empty string we set up the object
    // we use the key of comment and set it to comment on state and we do the same with username
    if (this.state.comment !== "") {
      comment.comment = this.state.comment;
      comment.username = this.props.user.username;
    }
    // we use a post method passing in our newly created comment
    // that will add our comment to the comment collection
    axios
      .post("https://dt-back-end.herokuapp.com/comments", comment)
      .then(response => {
        // we now reset our comment object
        let comment = {};
        // we set the comment key to the value of the comments passed in from props
        comment.comments = this.props.comments;
        // when than push in this new id into that comments array
        // on the backend the array is a ref by id so it uses the comment id's to reference the comments
        // from the comment collection
        comment.comments.push(response.data._id);
        // when than get post  from the tags endpoint
        axios
          .get(`https://dt-back-end.herokuapp.com/tags/${this.props.tagId}`)
          .then(response => {
            // we set up a unread variable
            let unread;
            // if the user posting is not the user who made the post
            // than we increment the undread counter for the post
            // and if it is them we don't increment it we just pass in the current
            if (this.props.tag.user !== this.props.user.username) {
              unread = response.data.unreadComment + 1;
            } else {
              unread = response.data.unreadComment;
            }
            // we add that new undread value to the comment object under the unreadComment key
            // and we update the tag(post) with that new value
            // this will mean the post has a new notification :D!!!
            comment.unreadComment = unread;
            axios
              .put(
                `https://dt-back-end.herokuapp.com/tags/${this.props.tagId}`,
                comment
              )
              // we than reset our comment input and call these functions to update the data being rendered 
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

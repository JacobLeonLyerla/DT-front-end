// here is where we will render the commetns and set up all the puts and stuff to maintain them

import React, { Component, Fragment } from "react";
import { Button, Input, Form, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";

class Comments extends Component {
state={comment:"", comments:[]}

setComments =()=>{
    console.log(this.props.comments)
 if(this.state.comments.length <0){
      this.setState({comments:this.props.comments})
      }
      let arr = this.props.comments
      console.log(arr)
      return(<div>{this.renderComments(arr)}</div>)
}
  renderComments = (comments) => {
      console.log(comments)
    if (this.state.comments !== undefined) {
      if (this.state.comments.length > 0) {
        return this.state.comments.map(comment =>   {
         return <div>{comment.comment}</div>;
        });
      }    else {
        return <div className="no-comments" >No comments yet</div>;
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
        let comment={}
        comment.comments = this.props.comments
        comment.comments.push(response.data._id)
        axios
          .put(
            `https://dt-back-end.herokuapp.com/tags/${this.props.id}`,
            comment
          )
          .then(response => {
          
          })
          .catch(err => {
          });
      })
      .catch(err => {
      });
  };
  render() {
    return (
      <Fragment>
          {this.setComments()}
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

// here is where we will render the commetns and set up all the puts and stuff to maintain them

import React, { Component, Fragment } from "react";
import { Button, Input, Form, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";

class Comments extends Component {
  state = {
    comment: ""
  };
  renderComments = () => {
    if (this.props.comments !== undefined) {
      if (this.props.comments.length > 0) {
        return this.props.comments.map(comment => {
          <div>{comment}</div>;
        });
      } 
    }
  };
  handleInput = input => {
    this.setState({ [input.target.name]: input.target.value });
  };
  handleSubmit = () => {
    const token = localStorage.getItem("token");

    const authToken = `${token}`;

    const requestOptions = {
      headers: {
        Authorization: authToken
      }
    }
    let comment = {};
    if (this.state.comment !== "") {
      comment.comment = this.state.comment;
      comment.username = this.props.user.username;
    }
    axios
      .post("https://dt-back-end.herokuapp.com/comments", comment)
      .then(response => {
        console.log(response.data);
        let comment={}
        comment.comments = this.props.comments
        comment.comments.push(response.data._id)
        axios
          .put(
            `https://dt-back-end.herokuapp.com/tags/${this.props.id}`,
            comment
          )
          .then(response => {
              console.log(response.data)
            axios
            .get(
              `https://dt-back-end.herokuapp.com/tags/${response.data._id}`
            )
            .then(response => {
              console.log(response.data);
            })
          })
          .catch(err => {
            console.log(err);
          });
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    return (
      <Fragment>
          {this.props.comments?(<Fragment>
        {this.renderComments()}</Fragment>):(
            <div className="no-comments" >No Comment yet</div>)
          }
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

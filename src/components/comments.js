// here is where we will render the commetns and set up all the puts and stuff to maintain them



import React, { Component,Fragment } from "react";
import {Input,Form, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";

class Comments extends Component {
 state={
     comment:"",
 }
    renderComments=()=>{
        if(this.props.comments !== undefined){
        if(this.props.comments.length >0){
            return this.props.comments.map(comment=>{
                <div>{comment}</div>
            })
        }else{
            return<div className="no-comments"></div>
        }
    }
}
handleInput = input => {
    this.setState({ [input.target.name]: input.target.value });
  };
  render() {
    return (<Fragment>
        {this.renderComments()}
        <Form>
        <Input
        name="comment"
        value={this.state.comment}
        onchange={this.handleInput}
        type="textarea"
        style={{height:"10vh"}}
        /></Form>
  </Fragment>);
  }
}
export default Comments;

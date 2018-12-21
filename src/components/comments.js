// here is where we will render the commetns and set up all the puts and stuff to maintain them



import React, { Component,Fragment } from "react";
import {Input, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";

class Comments extends Component {
 
    renderComments=()=>{
        if(this.props.comments !== undefined){}
        if(this.props.comments.length >0){
            return this.props.comments.map(comment=>{
                <div>{comment}</div>
            })
        }else{
            return<div className="no-comments"></div>
        }
    }

  render() {
    return (<Fragment>
        {this.renderComments()}
        <Input
        style={{height:"20vh"}}
        />
  </Fragment>);
  }
}
export default Comments;

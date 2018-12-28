import React, { Component,Fragment } from "react";
import {Col} from "reactstrap"
class Post extends Component {
renderPost=()=>{
          return this.props.post.map(post =>(<Fragment>
              {console.log(post)}
          </Fragment>))
      }

  render() {
      
    return (
        <Col className="table-container" md={`${10 + this.props.tagVar}`}>

        {this.renderPost()}
      </Col>
    );
  }
}
export default Post;

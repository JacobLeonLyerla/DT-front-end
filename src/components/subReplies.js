import React, { Component,Fragment } from "react";
class SubReply  extends Component {

     renderReplies(){
         if(this.props.replies !== undefined){
            return this.props.replies.map(reply=>(<Fragment>
                  <div className="reply sub-reply"> <div className="reply-username sub-username">{reply.username}</div>
            <div className="reply-comment sub-comment">{reply.comment}</div></div>
            </Fragment>)) 
         }
      }

  render() {
console.log(this.props.replies.length)
    return (<Fragment>

        {this.renderReplies()}
    </Fragment>
    );
  }
}
export default SubReply;

import React,{Component,Fragment} from 'react';

 class Replies extends Component {

       renderReplies=()=>{
           if(this.props.replies !== undefined){
            return this.props.replies.map(reply =>(<Fragment>
       
       <div className="reply"> <div className="reply-username">{reply.username}</div>
            <div className="reply-comment">{reply.replies}</div></div>

             </Fragment>))

           }
       }
  render() {
    return (
        <Fragment>
        
{this.renderReplies()}
        </Fragment>)


  }
}
export default Replies;
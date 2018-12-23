import React,{Component,Fragment} from 'react';
import axios from "axios";
import Reply from "./reply"
 class Replies extends Component {
    state={
        reply:{},
        subReply:{},
        subReplycalled:false,
    }
componentDidMount(){
    this.setupReplies()
}
    setupReplies=()=>{
        
           axios
           .get(`https://dt-back-end.herokuapp.com/comments/${this.props.id}`)
           .then(response=>{
            this.setState({reply:response.data.replies})
           }).catch(err=>{
        
           })
      
    }

       renderReplies=()=>{
          if(this.state.reply.length !== this.props.replies.length){
              this.setupReplies()
          }
           if(this.props.replies !== undefined){
        
            
           if(this.state.reply.length >0){
            return this.state.reply.map(reply =>(<Fragment>
               
        <div className="reply">{reply.username === this.props.user.username ?(<Fragment>aaa</Fragment>):(<Fragment> <Reply
                    reply={reply.replyTo}
                    id={reply._id}
                    username={reply.username}
                    replies={reply.replies}
                    user={this.props.user}
                    propsId={this.props.tagId}
                    setupComments={this.props.setupComments}
                  /></Fragment>)}
        <div className="reply-username">{reply.username}</div>
            <div className="reply-comment">{reply.comment}</div></div>


             </Fragment>))

           }
        }
       }

       setupSubReplies=(id)=>{
        axios
        .get(`https://dt-back-end.herokuapp.com/comments/${id}`)
        .then(response=>{
         this.setState({subReply:response.data.replies})
        }).catch(err=>{
     
        })
    }
// renderSubReplies=()=>{
//     if(this.state.subReply !== undefined && this.state.reply !==undefined){
//     if(this.state.subReply.length !== this.state.reply.replies.length){

//     }}
//   if(this.state.subReplycalled !==true){
//    if(this.state.reply.length >0){
//      this.state.reply.forEach(reply => {
//          for (let i = 0; i < reply.replies.length; i++) {
//              this.setupSubReplies(reply.replies[i])
             
//          }
//          this.setupReplies(reply._id)
         
//      });
//    } 
//   }
// }
  render() {
    return (
        <Fragment>
        {this.renderReplies()}
        </Fragment>)


  }
}
export default Replies;
import React,{Component,Fragment} from 'react';
import SubReplies from "./subReplies"
import axios from "axios";
import Reply from "./reply"
import Edit from "./edit";
 class Replies extends Component {
    state={
        reply:{},
        subReply:{},
        subReplycalled:false,
        id:"",
    }
componentDidMount(){
    this.setupReplies()
}
    setupReplies=()=>{
        
           axios
           .get(`https://dt-back-end.herokuapp.com/comments/${this.props.id}`)
           .then(response=>{
            this.setState({reply:response.data.replies})
            let sub = []
            response.data.replies.forEach(reply => {
                reply.replies.forEach(nReply =>{
                    sub.push(nReply)
                })
               
            });
            this.setState({subReply:sub,id:this.props.propsId})
           }).catch(err=>{
        
           })
      
    }

       renderReplies=()=>{
        let countReply =[]
           if(this.props.replies !== undefined){
            if(this.state.reply.length !== this.props.replies.length ){       
              this.setupReplies()       
          }
          if(this.props.reply === true){       
            this.props.replyflag("false")
          this.setupReplies()     
      }
          if(this.state.reply.length >0){

          this.state.reply.forEach(count=>{
             count.replies.forEach(repliesCount=>{
                  countReply.push(repliesCount)
             })
             
          })}
           if(this.state.reply.length >0){
            return this.state.reply.map(reply =>(<Fragment>
               
        <div className="reply">{reply.username === this.props.user.username ?(<Fragment><Edit 
         id={reply._id}
                comment={reply}
                setupComments={this.props.setupComments}
                propsId={this.props.propsId}
                replyflag={this.props.replyflag}
                /></Fragment>):(<Fragment> <Reply
                    
                    replyflag={this.props.replyflag}
                    reply={reply.replyTo}
                    id={reply._id}
                    username={reply.username}
                    replies={reply.replies}
                    user={this.props.user}
                    propsId={this.state.id}
                    setupComments={this.props.setupComments}
                  /></Fragment>)}
        <div className="reply-username">{reply.username}</div>
            <div className="reply-comment">{reply.comment}</div></div>
           {console.log(reply.replies.length,countReply.length)} <SubReplies  replies={reply.replies}/>

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
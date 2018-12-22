import React,{Component,Fragment} from 'react';
import axios from "axios";

 class Replies extends Component {
    state={
        reply:{}
    }
componentDidMount(){
    this.setupReplies()
}
    setupReplies=(id)=>{
        
           axios
           .get(`https://dt-back-end.herokuapp.com/comments/${this.props.id}`)
           .then(response=>{
            this.setState({reply:response.data.replies})
           }).catch(err=>{
        
           })
      
    }

       renderReplies=()=>{
          if(this.state.reply !== {}){
              this.setupReplies()
          }
           if(this.props.replies !== undefined){
        
            
           if(this.state.reply.length >0){
            return this.state.reply.map(reply =>(<Fragment>
               
        <div className="reply">{reply.username === this.props.user.username ?(<Fragment>aaa</Fragment>):(<Fragment>bbb</Fragment>)}
        <div className="reply-username">{reply.username}</div>
            <div className="reply-comment">{reply.comment}</div></div>

             </Fragment>))

           }
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
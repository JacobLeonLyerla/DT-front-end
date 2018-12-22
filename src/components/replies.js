import React,{Component,Fragment} from 'react';

 class Replies extends Component {
    state={
        reply:{}
    }
    componentDidMount(){
        this.setupReplies()
    }
    setupReplies=()=>{
           axios
           .get(`https://dt-back-end.herokuapp.com/comments/${this.props.replies}`)
           .then(response=>{
           console.log(response.data)
         
           }).catch(err=>{
        
           })
           return data
          
    }

       renderReplies=()=>{
           if(this.props.replies !== undefined){
            return this.props.replies.map(reply =>(<Fragment>
               
        <div className="reply">{reply.username === this.props.user.username ?(<Fragment>aaa</Fragment>):(<Fragment>bbb</Fragment>)}
        <div className="reply-username">{reply.username}</div>
            <div className="reply-comment">{reply.Comment}</div></div>

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
import React,{useContext,useEffect,useState} from 'react'
import AppContext from '../../../context'
import axios from 'axios';
const Replies = ({comment}) => {
    const [repliesArr, setRepliesArr] = useState([]);
    const [subReplyArr, setSubReplyArr] = useState([]);
    const {comments,renderReplies,user,setRenderReplies} = useContext(AppContext);

  
    
    const setupReplies = (id) => {
        const {_id} = comment;

      axios
        .get(`https://dt-back-end.herokuapp.com/comments/${_id}`)
        .then((response) => {
        
            setRepliesArr( response.data.replies );
            let sub = [];
            response.data.replies.forEach(reply => {
              reply.replies.forEach(nReply => {
                sub.push(nReply);
              });
            });
            setSubReplyArr(sub)
          })
          .catch(err => {});
         
  };
    useEffect(() => {
            setupReplies()
        
    }, [])

if(renderReplies){
     
     setupReplies("test test test")
      setRenderReplies(!renderReplies)
}

    if (repliesArr.length > 0) {
        return repliesArr.map(reply => (
          <>
            <div className="reply">
              {reply.username === user.username ? (
                <>
                 "edit"
                </>
              ) : (
                <>
                  {" "}
                 "reply"
                </>
              )}
              <div className="reply-username">{reply.username}</div>
              <div className="reply-comment">{reply.comment}</div>
            </div>
            {/* <SubReplies replies={reply.replies} /> */}
          </>
        ));
      }else{
          return <></>
      }
}

export default Replies

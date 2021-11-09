import React,{useContext,useEffect,useState} from 'react'
import AppContext from '../../../context'
import axios from 'axios';

const Replies = ({comment}) => {
    const [repliesArr, setRepliesArr] = useState([]);
    const {newReplies} = useContext(AppContext);

  
    
    const setupReplies = (id) => {
        const {_id} = comment;

      axios
        .get(`https://dt-back-end.herokuapp.com/comments/${_id}`)
        .then((response) => {
        
            setRepliesArr( response.data.replies );
   
          })
          .catch(err => {});
         
  };
    useEffect(() => {
            setupReplies()
        
    }, [])


    if(newReplies.length){
    newReplies.forEach(reply => {
      repliesArr.push(newReplies.pop())
    });
    }
    if (repliesArr.length > 0) {
        return(<>{repliesArr.map(reply => (
          <>
            <div className="reply">
             
              <div className="reply-username">{reply.username}</div>
              <div className="reply-comment">{reply.comment}</div>
            </div>
            {/* <SubReplies replies={reply.replies} /> */}
          </>
        ))}
          <>

          </>
        </>);
      }else{
          return <></>
      }
}

export default Replies

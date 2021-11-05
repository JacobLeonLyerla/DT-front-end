import React,{useContext,useState,useEffect} from 'react'
import AppContext from '../../../context';
import {
    Button,
    Input,
    Form
  } from "reactstrap";
const Reply = ({comment}) => {
  const { currentTag, reply,setReply,handleReply, } = useContext(AppContext);
  const [currentComment,setCurrentComment] = useState({})
  const [inputToggle,setInputToggle] = useState(true)
  
  useEffect(() => {
      setCurrentComment(comment)

  
  }, [])
  const toggleAndReply =(comment)=>{
    setInputToggle(!inputToggle)
    handleReply(comment)
    
  }
    return (
<div className="target-comment">

<>
{inputToggle?      <i
        onClick={()=>setInputToggle()}
        id={`reply${currentTag._id}`}
        class="fas fa-reply"
      />

:

    ( <> <Form>
        <Input
          
          name="reply"
          value={reply}
          onChange={(e)=>setReply(e.target.value)}
          className="reply-input"
          type="textarea"
        />
      </Form>
     
      {reply!==""?  <Button className="reply-button" color="primary" onClick={() =>toggleAndReply(comment)}>
         Reply
        </Button>: <Button className="reply-button" color="primary" onClick={() =>setInputToggle(!inputToggle)}>
         Close
        </Button>}</>)}
     
  </>
      </div>
    )
}

export default Reply



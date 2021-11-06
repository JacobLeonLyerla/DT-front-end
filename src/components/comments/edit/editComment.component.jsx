import React, { useContext,useState } from 'react'
import {
    Button,
    Input,
    Form
  } from "reactstrap";
import AppContext from '../../../context';
const EditComment = ({comment}) => {
    const {currentTag,editComment,renderReplies,setRenderReplies,getComments}=useContext(AppContext)
    const [inputToggle,setInputToggle] = useState(true)
    const [editedComment,setEditedComment] = useState(comment.comment)
    const toggleAndReply =(comment)=>{
        setInputToggle(!inputToggle)
        editComment(comment._id,editedComment)
      
      }
  if(renderReplies){
            getComments(currentTag._id)
            setRenderReplies(!renderReplies)

        }
    return (
        
<>

<>
{inputToggle?      <i
        onClick={()=>setInputToggle()}
        id={`edit${currentTag._id}`}
        class="fas fa-edit"
      />

:       

    ( <> <Form>
        <Input
          
          name="comment"
          value={editedComment}
          onChange={(e)=>setEditedComment(e.target.value)}
          className="reply-input"
          type="textarea"
        />
      </Form>
     
      {editedComment!==""?  <Button className="reply-button" color="primary" onClick={() =>toggleAndReply(comment)}>
         Edit
        </Button>: <Button className="reply-button" color="primary" onClick={() =>setInputToggle(!inputToggle)}>
         Close
        </Button>}</>)}
     
  </>
      </>
    
    )
}

export default EditComment

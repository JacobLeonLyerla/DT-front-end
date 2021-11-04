import React,{useContext} from 'react'
import AppContext from '../../../context';
import {
    Button,
    Tooltip,
    Modal,
    ModalHeader,
    ModalFooter,
    Input,
    Form
  } from "reactstrap";
const Reply = ({comment}) => {
  const { currentTag, reply,setReply,handleReply,setCurrentToggleState,toggle } = useContext(AppContext);

  const renderModal =()=>{
    return(<>
      <i
        onClick={()=>setCurrentToggleState()}
        id={`reply${currentTag._id}`}
        class="fas fa-reply"
      />
      <Modal
      isOpen={toggle}
      toggle={setCurrentToggleState}
    >
      <ModalHeader  toggle={()=>setCurrentToggleState()}>{`Reply to ${
        currentTag.user
      }`}</ModalHeader>

      <Form>
        <Input
          style={{ height: "30vh" }}
          name="reply"
          value={reply}
          onChange={(e)=>setReply(e.target.value)}
          type="textarea"
        />
      </Form>
      <ModalFooter>
        <Button color="primary" onClick={() =>handleReply(comment)}>
          Reply
        </Button>{" "}
      </ModalFooter>
    </Modal></>)
  }
 
    return (
<div className="target-comment">

        {renderModal()}
      </div>
    )
}

export default Reply



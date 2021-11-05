import React,{useContext} from 'react'
import AppContext from '../../../context'
import EditComment from './editComment.component'

const Edit = ({comment}) => {
    const {deleteComment}=useContext(AppContext)
    return (
        <div className="target-comment">
        {/* this is where our edit comment is rendering it also has a div container that we use for rendering the tooltip */}
          <div className="edit-constainer" id={`edit${comment._id}`}>
            <EditComment
            comment={comment}
            />
          </div>
         
          |
                {/* same thing here for delete as we are doing for edit */}
  
          <div className="delete-constainer" id={`delete${comment._id}`}>
          <i class="fas fa-times" onClick={()=>deleteComment(comment._id)} />

          </div>
      
        </div>
    )
}

export default Edit

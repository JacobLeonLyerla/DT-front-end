import React,{useContext} from 'react'
import AppContext from '../../../context'
import EditComment from './editComment.component'

const Edit = ({comment}) => {
    const {deleteComment}=useContext(AppContext)
    return (
        <div className="target-comment">
          <div className="edit-constainer" id={`edit${comment._id}`}>
            <EditComment
            comment={comment}
            />
          </div>      
          |
          <div className="delete-constainer" id={`delete${comment._id}`}>
          <i class="fas fa-times" onClick={()=>deleteComment(comment._id)} />

          </div>
      
        </div>
    )
}

export default Edit

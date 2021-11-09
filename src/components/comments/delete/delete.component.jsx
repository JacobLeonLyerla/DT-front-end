import React from 'react'

const Delete = () => {
    return (
        <div>
          <i class="fas fa-times delete-tag" onClick={()=>deleteComment(comment._id)} />
        </div>
    )
}

export default Delete

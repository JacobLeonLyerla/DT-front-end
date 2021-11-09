import React from 'react'

const SubReplies = ({replies}) => {
    const renderReplies=()=> {
        if (replies !== undefined) {
          return replies.map(reply => (
            <>
              <div className="reply sub-reply">
                <div className="reply-username sub-username">{reply.username}</div>
    
                <div className="reply-comment sub-comment">{reply.comment}</div>
              </div>
            </>
          ));
        }
      }
    return (
        <>
            {renderReplies()}
        </>
    )
}

export default SubReplies

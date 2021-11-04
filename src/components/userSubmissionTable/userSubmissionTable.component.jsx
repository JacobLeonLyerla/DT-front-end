import React from 'react'
import { withRouter } from 'react-router';
const UserSubmission = ({history,tag}) => {
    return (
      
        <div
        onClick={()=>history.push(`/dashboard/trek/${tag._id}`)}
        className="td-container"
        style={{ display: "flex", flexDirection: "row" }}
      >
        <div className="td">{tag.name}</div>
        <div className="td">
          {tag.locationName ? tag.locationName : "location not given"}
        </div>
        <div className="td tag">
        {tag.tag.map(tag=>(
         <div className="tags">{tag}<br/></div>
        ))} </div>     
      </div>
    )
}

export default withRouter(UserSubmission)



import React from 'react'
import AppContext from '../../context';

import { useContext } from 'react'
const UserSubmission = () => {
  const { tags } = useContext(AppContext);
    const tag = tags[0]
    console.log(tag)
    return (
        <div
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

export default UserSubmission



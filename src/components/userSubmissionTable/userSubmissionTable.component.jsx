import React from 'react'

const UserSubmissionTable = () => {
    return (
        <div
        className="td-container"
        style={{ display: "flex", flexDirection: "row" }}
      >
        <div className="td">{sub.name}</div>
        <div className="td">
          {sub.locationName ? sub.locationName : null}
        </div>
        {this.renderTags(sub.tag)}
      </div>
    )
}

export default UserSubmissionTable

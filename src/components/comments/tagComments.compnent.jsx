import React, { useEffect, useContext } from "react";
import AppContext from "../../context";
import { withRouter } from "react-router";

import Reply from "../reply/reply.component"
const TagComments = ({ match }) => {
  const { user,comments, getComments,loadUser } = useContext(AppContext);
  useEffect(() => {
    const { id } = match.params;
    loadUser()
    getComments(id)
  }, []);
  return <div className="comments-container">{comments.map(comment =>(
    
          <div className="comment-container">

          <Reply comment={comment}/>


          </div>
     
  ))}</div>;
};

export default withRouter(TagComments);

import React, { useEffect, useContext } from "react";
import AppContext from "../../context";
import { withRouter } from "react-router";

import { Button, Input, Form } from "reactstrap";
import Reply from "./reply/reply.component"
import Replies from "./replies/replies.component";
const TagComments = ({ match }) => {
  const {
    comments,
    getComments,
    loadUser,
    user,
    comment,
    setComment,
    handleComment,
    getTagById,
  } = useContext(AppContext);
  useEffect(() => {
    const { id } = match.params;
    loadUser();
    getComments(id);
    getTagById(id);
  }, []);
  return (
    <>
      {" "}
      <div className="comments-container">  {comments.map((comment) => (
      
          <div key={comment._id} className="comment-container">
            {comment.username !== user.username ? (
              <>
                <Reply comment={comment} />
                <div className="username">{comment.username}</div>
              </>
            ) : (
              <>
                Edit
                <div className="username">You Commented</div>
              </>
            )}

            <div className="comment">{comment.comment}</div>
            <div className="replies"><Replies comment={comment}/></div>
          </div>
        
      ))}</div>
      <Form className="comment-form">
        <Button
          className="btn-post"
          onClick={() => handleComment()}
          color="primary"
        >
          Post
        </Button>
        <Input
          name="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          type="textarea"
          style={{ height: "10vh" }}
        />
      </Form>
    </>
  );
};

export default withRouter(TagComments);

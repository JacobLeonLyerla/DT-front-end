import React, { useContext, useEffect } from "react";
import AppContext from "../../context";
import { Button, Col } from "reactstrap";

import { Link } from "react-router-dom";
import TableContainer from "../containers/tabelContainer.component";

const ViewPost = () => {
  const { user, loadUser } = useContext(AppContext);
  useEffect(() => {
    loadUser();
  }, []);
  return (
    <Col className="table-container col-md-10">
      <Link
        to={`/dashboard/create/${user.username}}`}
        style={{ textDecoration: "none" }}
      >
        <Button>
          <span className="post-list-span">New Post</span>
        </Button>{" "}
      </Link>
      <TableContainer
        colOneLabel="Notifications"
        colTwoLabel="Locations"
        colThreeLabel="Tags"
        type="Post"
        post={user.post}
      />
    </Col>
  );
};

export default ViewPost;

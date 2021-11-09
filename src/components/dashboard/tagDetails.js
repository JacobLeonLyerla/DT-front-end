import React, { useEffect, useContext } from "react";
import AppContext from "../../context";
import { withRouter } from "react-router";

const Details = ({ match }) => {
  const { currentTag, getTagById } = useContext(AppContext);

  useEffect(() => {
    const { id } = match.params;

    getTagById(id);
  }, []);

  return (
    <>
      {currentTag ? (
        <div className="details">
          <div className="header">
            <div className="username">
              Posted by <div className="user">{` ${currentTag.user}`}</div>
            </div>

            <div className="name">{currentTag.name}</div>
          </div>

          <div className="description">{currentTag.description}</div>
        </div>
      ) : (
        <div>does not</div>
      )}
    </>
  );
};

export default withRouter(Details);

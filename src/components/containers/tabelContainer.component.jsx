import React from "react";

import UserSubmission from "../userSubmissionTable/userSubmissionTable.component";
import { Table } from "semantic-ui-react";
import AppContext from "../../context";
import { useContext } from "react";
import Post from "../post/post.component";
const TableContainer = ({ colOneLabel, colTwoLabel, colThreeLabel }) => {
  const { tags } = useContext(AppContext);

  return (
    <Table className="tags-table">
      <div className="tr">
        <div className="name head">{colOneLabel}</div>

        <div className="city head">{colTwoLabel}</div>

        <div className="tags head">{colThreeLabel}</div>
      </div>

      {tags.map((tag) => (
        <div className="tbody">
          <div>
            <UserSubmission tag={tag} />
          </div>
        </div>
      ))}
    </Table>
  );
};

export default TableContainer;

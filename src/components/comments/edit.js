import React, { Component } from "react";

import { Tooltip } from "reactstrap";

import Delete from "./delete";

import EditComment from "./editComment";

class Edit extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      tooltipEdit: false,
      tooltipDelete: false
    };
  }
  // this toggle toggles the tooltip  for edit or delete based on what type is passed
  toggle(type) {
    if (type === "edit") {
      this.setState({
        tooltipEdit: !this.state.tooltipEdit
      });
    } else {
      this.setState({
        tooltipDelete: !this.state.tooltipDelete
      });
    }
  }
  render() {
    return (
      <div className="target-comment">
      {/* this is where our edit comment is rendering it also has a div container that we use for rendering the tooltip */}
        <div className="edit-constainer" id={`edit${this.props.id}`}>
          <EditComment
            id={this.props.id}
            comment={this.props.comment}
            setupComments={this.props.setupComments}
            propsId={this.props.propsId}
            replyflag={this.props.replyflag}
          />
        </div>
        <Tooltip
          placement="left"
          isOpen={this.state.tooltipEdit}
          target={`edit${this.props.id}`}
          toggle={() => this.toggle("edit")}
        >
          Edit
        </Tooltip>
        |
              {/* same thing here for delete as we are doing for edit */}

        <div className="delete-constainer" id={`delete${this.props.id}`}>
          <Delete
            id={this.props.id}
            comment={this.props.comment}
            setupComments={this.props.setupComments}
            propsId={this.props.propsId}
            replyflag={this.props.replyflag}
          />{" "}
        </div>
        <Tooltip
          placement="right"
          isOpen={this.state.tooltipDelete}
          target={`delete${this.props.id}`}
          toggle={this.toggle}
        >
          delete
        </Tooltip>
      </div>
    );
  }
}
export default Edit;

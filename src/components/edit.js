import React from "react";
import { Tooltip } from "reactstrap";
import Delete from "./delete"
class Edit extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      tooltipEdit: false,
      tooltipDelete: false
    };
  }

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
        <i id={`edit${this.props.id}`} class="fas fa-edit" />{" "}
        <Tooltip
          placement="left"
          isOpen={this.state.tooltipEdit}
          target={`edit${this.props.id}`}
          toggle={() => this.toggle("edit")}
        >
          Edit
        </Tooltip>|
        <div className="delete-constainer" id={`delete${this.props.id}`}>
        <Delete
       
        /> </div>
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

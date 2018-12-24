import React, { Component } from "react";
class Details extends Component {
  render() {
    return (
      <div className="details">
        <div className="username">{this.props.tag.user}</div>
        <div className="name">{this.props.tag.name}</div>
        <div className="description">{this.props.tag.description}</div>
      </div>
    );
  }
}
export default Details;

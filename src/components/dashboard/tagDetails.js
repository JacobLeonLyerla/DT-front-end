import React, { Component } from "react";

class Details extends Component {
  render() {
    return (
      // very basic function just takes the props passed in and renders the
      // infromation about the user the title and the discription
      <div className="details">
        <div className="header">
          <div className="username">
            Posted by <div className="user">{` ${this.props.tag.user}`}</div>
          </div>
          <div className="name">{this.props.tag.name}</div>
        </div>
        <div className="description">{this.props.tag.description}</div>
      </div>
    );
  }
}
export default Details;

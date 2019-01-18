import React, { Component } from "react";
import { Col } from "reactstrap";
import axios from "axios";
import Details from "./tagDetails";
import Pictures from "./renderPictures";
import Map from "./googleMaps";
import Comments from "../comments/comments";
class Trek extends Component {
  state = {
    tag: ""
  };
  componentDidMount() {
    let { id } = this.props.match.params;

    this.setTags(id);
  }
  setTags = id => {
    axios
      .get(`https://dt-back-end.herokuapp.com/tags/${id}`)
      .then(response => {
        this.setState({ tag: response.data });
      })
      .catch(err => {});
  };

  render() {
    console.log(this.state.tag);
    return (
      <Col className="table-container" md={`${10 + this.props.tagVar}`}>
        <Map
          tag={this.state.tag}
          name={this.state.tag.name}
          markers={this.state.tag.markers}
        />
        <Details tag={this.state.tag} />

        <Comments
          comments={this.state.tag.comments}
          setTags={this.setTags}
          tag={this.state.tag}
          tagId={this.state.tag._id}
          user={this.props.user}
          loadUser={this.props.loadUser}
        />
        <Pictures imgTag={this.state.tag.tag} style="tag-filtered" />
      </Col>
    );
  }
}
export default Trek;

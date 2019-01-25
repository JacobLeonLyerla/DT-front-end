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
  // this be called on render, deconstructing the id form our props
  componentDidMount() {
    let { id } = this.props.match.params;
  // we can then call set tags passing in our id
    this.setTags(id);
  }
  // set tags will call our backend by id and pull all the tags.
  // tags are just my poor naming of post
  // so a tag is a post
  setTags = id => {
    axios
      .get(`https://dt-back-end.herokuapp.com/tags/${id}`)
      .then(response => {
        this.setState({ tag: response.data });
      })
      .catch(err => {});
  };

  render() {
    return (
      // like dashboard this column is inside of our row and the size will change
      // based on the variables passed in with props
      <Col className="table-container" md={`${10 + this.props.tagVar}`}>
      {/* our map function is here we pass in the data we need in order to render a map */}
        <Map
          tag={this.state.tag}
          name={this.state.tag.name}
          markers={this.state.tag.markers}
        />
       {/* details our header and description for the post we pass in the current tag
       or rather a post  */}
        <Details tag={this.state.tag} />
        {/* our comment sction is called after that passing in all the 
        data we need to make it work */}
        <Comments
          comments={this.state.tag.comments}
          setTags={this.setTags}
          tag={this.state.tag}
          tagId={this.state.tag._id}
          user={this.props.user}
          loadUser={this.props.loadUser}
        />
        {/* lastly we render the associated "tags" rather subcategories
        I really got mixed up with naming here. I will be fixing this at some point soon. */}
        <Pictures imgTag={this.state.tag.tag} style="tag-filtered" />
      </Col>
    );
  }
}
export default Trek;

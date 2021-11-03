import React, { Component } from "react";

import { Row } from "reactstrap";
import PictureCard from "../pictureCard/pictureCard.component.jsx";

class Pictures extends Component {


  
  // our render pictures funtion is pretty cool
  renderPictures = () => {
    // first we set up an empty array for the images
    let arr = [];
    // if pictures is defined we can go inside and start doing work
    if (this.props.pictures !== undefined) {
      // when the props pictures is longer than one we map over them and push thme into our array
      if (this.props.pictures.length > 0) {
        this.props.pictures.forEach((picture) => {
          arr.push(picture.name);
        });
      }
    }
    // next we check and make sure that the img tage is defined than we
    // chec it's length if the length is greater than 0 we set our array to that
    if (this.props.imgTag !== undefined) {
      if (this.props.imgTag.length > 0) {
        arr = this.props.imgTag;
      }
    }

    // when our array is longer than zero we than map out the array
    if (arr.length > 0) {
      return arr.map((img) => {

        return <PictureCard img={img} />;
      });
    } else {
    }
  };
  render() {
    return (
      <Row>{this.renderPictures()}</Row>
    );
  }
}
export default Pictures;

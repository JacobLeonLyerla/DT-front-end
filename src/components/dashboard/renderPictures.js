import React, { Component } from "react";

import { Row } from "reactstrap";
import PictureCard from "../pictureCard/pictureCard.component.jsx";

const Pictures = ({ pictures }) => {
  const renderPictures = () => {
    const arr = [];
    if (pictures !== undefined) {
      if (pictures.length > 0) {
        pictures.forEach((picture) => {
          arr.push(picture.name);
        });
      }
    }
    console.log(arr);
    return arr.sort().map((img) => {
      return <PictureCard img={img} />;
    });
  };

  return <Row>{renderPictures()}</Row>;
};
export default Pictures;

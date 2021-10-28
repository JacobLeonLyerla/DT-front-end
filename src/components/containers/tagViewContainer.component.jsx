import React, { useContext } from "react";
import RenderTags from "../tagView/renderTags.component";
import Maps from "../dashboard/googleMaps";
import { Col, Row } from "reactstrap";
import PictureCard from "../pictureCard/pictureCard.component";
import AppContext from "../../context";
const TagViewContainer = () => {
  const { example } = useContext(AppContext);
  let name = example[0].name;
  name = name.replace(/-/g, "").toLowerCase();
  const { tag } = example[0];
  return (
    <Col className="tags-container col-md-10">
      <Row>
        {tag.map((img) => {
          return <PictureCard img={img} className="tag-filtered" />;
        })}
      </Row>
    </Col>
  );
};

export default TagViewContainer;

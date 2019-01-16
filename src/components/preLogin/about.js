import React, { Component, Fragment } from "react";
import YouTube from "react-youtube";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

class About extends Component {
  state = {
    vidieo: "HNFvgneBabE"
  };

  render() {
    const opts = {
      height: "100%",
      width: "100%",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };

    return (
      <div className="modal-container">
      <div className="youtube">
        <YouTube
          videoId={this.state.vidieo}
          opts={opts}
          onReady={this._onReady}
        /></div>
        <div className="modal-buttons">
          <Button onClick={() => this.setState({ vidieo: "HNFvgneBabE" })}>
            Intro
          </Button>
          <Button onClick={() => this.setState({ vidieo: "jFycqnOpifQ" })}>
            Viewing
          </Button>
          <Button onClick={() => this.setState({ vidieo: "B9JjlwtFImU" })}>
            Creating
          </Button>
        </div>
      </div>
    );
  }
}
export default About;

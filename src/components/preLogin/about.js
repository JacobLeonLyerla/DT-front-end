import React, { Component, Fragment } from "react";
import YouTube from "react-youtube";
import {

  Button
} from "reactstrap";

class About extends Component {
  state = {
    vidieo: "aPjcPXQeYzc"
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
          <Button onClick={() => this.setState({ vidieo: "aPjcPXQeYzc" })}>
            Intro
          </Button>
          <Button onClick={() => this.setState({ vidieo: "fQRcpxmw-2U" })}>
            Viewing
          </Button>
          <Button onClick={() => this.setState({ vidieo: "shUuiDnF0VU" })}>
            Creating
          </Button>
        </div>
      </div>
    );
  }
}
export default About;

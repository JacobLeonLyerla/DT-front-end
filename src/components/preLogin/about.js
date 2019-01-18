import React, { Component } from "react";
import YouTube from "react-youtube";
import { Button } from "reactstrap";

class About extends Component {
  state = {
    vidieo: "aPjcPXQeYzc",
    button: ""
  };
  buttonClicked = id => {
    if (id === this.state.button) {
      return "clicked";
    }
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
          />
        </div>
        <div className="modal-buttons">
          <Button
            className={this.buttonClicked("intro")}
            onClick={() =>
              this.setState({ vidieo: "aPjcPXQeYzc", button: "intro" })
            }
          >
            Intro
          </Button>
          <Button
            className={this.buttonClicked("viewing")}
            onClick={() =>
              this.setState({ vidieo: "fQRcpxmw-2U", button: "viewing" })
            }
          >
            Viewing
          </Button>
          <Button
            className={this.buttonClicked("creating")}
            onClick={() =>
              this.setState({ vidieo: "shUuiDnF0VU", button: "creating" })
            }
          >
            Creating
          </Button>
        </div>
      </div>
    );
  }
}
export default About;

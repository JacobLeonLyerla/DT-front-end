import React, { Component } from "react";

import YouTube from "react-youtube";

import { Button } from "reactstrap";
import {buttonClicked} from "../../helpers/aboutHelpers"
class About extends Component {
  state = {
    vidieo: "aPjcPXQeYzc",
    button: ""
  };
  // this function is like a focus however it does not lose its styling when the user  interacts with the page
  // and since the modal renders a youtube video the the focus was constantly being lost


  render() {
    this.buttonClicked = buttonClicked.bind(this)
    // this coming from the docs  for react youtube, it's setting the rules for the player
    const opts = {
      height: "100%",

      width: "100%",

      playerVars: {
        autoplay: 1
      }
    };

    return (
      // we wrapped the youtube component that we pulled form react-youtube and we pass in the id we want for the video as well
      // as the rules we want for the player, so it will auto play and be full width and height
      <div className="modal-container">
        <div className="youtube">
          <YouTube
            videoId={this.state.vidieo}
            opts={opts}
            onReady={this._onReady}
          />
        </div>

        <div className="modal-buttons">
          {/* since we pull the video url from the state if we change the state with these
        buttons it will change the video being played
        and allso passing in the button into the state will allow us to asign the styles we want
        for a clicked button */}
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

import React, { Component, Fragment } from "react";

import {buttonClicked,aboutLayout} from "../../helpers/aboutHelpers"
class About extends Component {
  state = {
    vidieo: "aPjcPXQeYzc",
    button: ""
  };
  // this function is like a focus however it does not lose its styling when the user  interacts with the page
  // and since the modal renders a youtube video the the focus was constantly being lost


  render() {
    this.buttonClicked = buttonClicked.bind(this)
    this.aboutLayout = aboutLayout.bind(this)
    // this coming from the docs  for react youtube, it's setting the rules for the player


    return (<Fragment>
    {this.aboutLayout()}
    </Fragment>
    
    );
  }
}
export default About;

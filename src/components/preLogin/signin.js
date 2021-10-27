import React, { Component, Fragment } from "react";

import { handleSubmit, signinLayout } from "../../helpers/signinHelpers";
import { handleChange } from "../../helpers/commonHelpers";

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",

      password: ""
    };
  }

  // when this component is rendered it clears out local storage
  componentDidMount() {
    localStorage.clear();
  }

  render() {
    this.handleChange = handleChange.bind(this);
    this.handleSubmit = handleSubmit.bind(this);
    this.signinLayout = signinLayout.bind(this);
    return <Fragment>{this.signinLayout()}</Fragment>;
  }
}
export default Signup;

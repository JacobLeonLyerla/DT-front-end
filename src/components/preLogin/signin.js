import React, { Component } from "react";

import { FormGroup, Label, Input, Button } from "reactstrap";

import { Link } from "react-router-dom";


import {handleSubmit} from "../../helpers/signinHelpers"
import {handleChange} from "../../helpers/commonHelpers"

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
    this.handleChange = handleChange.bind(this)
    this.handleSubmit = handleSubmit.bind(this)
    return (
      <div className="signup-container">
        <form onSubmit={this.handleSubmit} className="signup-form">
          <FormGroup>
            <Label for="exampleEmail">Please Enter username</Label>

            <Input
              type="username"
              name="username"
              id="username"
              value={this.state.username}
              onChange={e => {
                this.handleChange(e);
              }}
            />
          </FormGroup>

          <FormGroup>
            <Label for="examplePassword">Please Enter a Password</Label>

            <Input
              type="password"
              name="password"
              id="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </FormGroup>
          <div className="form-buttons">
            <Button type="submit">Sign In</Button>
          </div>

          <div className="form-footer">
            {`Don't have an account yet? `}

            {<Link to="/signup">Sign Up now!</Link>}
          </div>
        </form>
      </div>
    );
  }
}
export default Signup;

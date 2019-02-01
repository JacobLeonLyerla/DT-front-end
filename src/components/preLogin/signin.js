import React, { Component } from "react";

import { FormGroup, Label, Input, Button } from "reactstrap";

import { Link } from "react-router-dom";

import axios from "axios";

class Signup extends Component {

  constructor(props) {
    super(props);

    this.state = {

      username: "",

      password: ""

    };

    this.handleChange = this.handleChange.bind(this);
  }

  // when this component is rendered it clears out local storage
  componentDidMount() {

    localStorage.clear();

  }

  handleChange = event => {

    const { target } = event;

    const { value } = target;

    const { name } = target;

    this.setState({

      [name]: value

    });
  };

  handleSubmit = e => {

    e.preventDefault();
    // clear ou storage and reomove id
    // i was having issues with this.

    localStorage.clear();

    localStorage.removeItem("id");

    const user = {

      username: this.state.username,

      password: this.state.password

    };
    // make a post to our login route that returns a  token and user id
    // than we set that one local storage for persisting the data
    axios
      .post("https://dt-back-end.herokuapp.com/auth/login", user)

      .then(resp => {

        localStorage.setItem("token", `Bearer ${resp.data.token}`);

        localStorage.setItem("id", resp.data.user._id);

        // call the load pictures function and push the user to the dashboard
        this.props.loadPictures();

        this.props.history.push("/dashboard");

      })

      .catch(() => {});
  };

  render() {

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

import React, { Component } from "react";

import {
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
  Button
} from "reactstrap";

import { Link } from "react-router-dom";

import axios from "axios";

import { handleChange } from "../../helpers/commonHelpers";
import { validateEmail,passwordStrength,emailMatch } from "../../helpers/signupHelpers";

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",

      email: "",

      checkEmail: "",

      password: "",

      password2: "",

      passwordType: "password",

      clickedStyle: "unclicked",

      validate: {
        emailState: "",

        checkEmailState: "",

        passwordState: "",

        password2State: ""
      }
    };
  }

  // this checks the password match the same code as the email
  // email and password match could be one function now that I look at it
  // I think I tunneled on this, and missed it.
  passwordMatch = e => {
    const { validate } = this.state;

    if (e.target.value === this.state.password) {
      validate.password2State = "has-success";
    } else {
      validate.password2State = "has-danger";
    }

    this.setState({ validate });
  };

  // thise is for showing the password
  typefield = () => {
    if (this.state.passwordType === "password") {
      this.setState({ passwordType: "text", clickedStyle: "clicked" });
    } else {
      this.setState({ passwordType: "password", clickedStyle: "unclicked" });
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    // set up a user object

    const user = {
      username: this.state.username,

      password: this.state.password,

      password2: this.state.password2,

      email: this.state.email
    };
    // pass in the user object into the register route to create a new user

    axios
      .post("https://dt-back-end.herokuapp.com/auth/register", user)

      .then(() => {
        // push the user to the signin route
        this.props.history.push("/signin");
      });
    // reset the inputs
    this.setState({
      username: "",

      password: "",

      password2: "",

      email: ""
    });
  };

  render() {
    this.handleChange = handleChange.bind(this);
    this.validateEmail = validateEmail.bind(this);
    this.passwordStrength = passwordStrength.bind(this);
    this.emailMatch = emailMatch.bind(this);
    return (
      <div className="signup-container">
        {/* set up a form with an on submit for when the user hits enter or pressed the button */}
        <Form onSubmit={this.handleSubmit} className="signup-form">
          <FormGroup>
            <Label for="username">Please Enter a Username</Label>

            {/* this is the basic structure for the input field
            pull the value off of state 
            when you type into the input it triggers on change
            that onchange then sets it on state
            the id is used to tie the label to the name */}
            <Input
              type="username"
              name="username"
              id="username"
              value={this.state.username}
              onChange={this.handleChange}

            />

            <FormFeedback valid>Sweet! that name is available</FormFeedback>
          </FormGroup>

          <FormGroup>
            <Label for="exampleEmail">Please Enter Email Address</Label>

            {/* this one has validators and the strings it calls the functions
            that we set up to run a test of validation
            if the valid calls the method and that method returns the right string
            same for invalid also on change it calls that validation method and passes it in */}
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="Email@Email.com"
              value={this.state.email}
              valid={this.state.validate.emailState === "has-success"}
              invalid={this.state.validate.emailState === "has-danger"}
              onChange={e => {
                this.validateEmail(e);

                this.handleChange(e);
              }}
            />
            <FormFeedback valid>
              That's a good looking email you've got there.
            </FormFeedback>

            <FormFeedback invalid>
              Uh oh! Looks like there is an issue with your email. Please input
              a correct email.
            </FormFeedback>
          </FormGroup>

          <FormGroup>
            <Label for="checkEmail">Please Re-type Email Address</Label>

            <Input
              type="email"
              name="checkEmail"
              id="checkEmail"
              value={this.state.checkEmail}
              valid={this.state.validate.checkEmailState === "has-success"}
              invalid={this.state.validate.checkEmailState === "has-danger"}
              onChange={e => {
                this.emailMatch(e);

                this.handleChange(e);
              }}
            />
            <FormFeedback valid>Email Matches</FormFeedback>

            <FormFeedback invalid>Email Does Not Match</FormFeedback>
          </FormGroup>

          <FormGroup>
            <Label for="examplePassword">Please Enter a Password</Label>

            <br />

            <Input
              type={this.state.passwordType}
              name="password"
              id="examplePassword"
              value={this.state.password}
              valid={this.state.validate.passwordState === "has-success"}
              invalid={this.state.validate.passwordState === "has-danger"}
              onChange={e => {
                this.passwordStrength(e);

                this.handleChange(e);
              }}
            />

            <FormFeedback valid>Strong!</FormFeedback>

            <FormFeedback invalid>Password Not Strong Enough</FormFeedback>
          </FormGroup>

          <FormGroup>
            <Label for="checkPasswrod">Please Re-type Enter a Password</Label>
            <Input
              type={this.state.passwordType}
              name="password2"
              id="password2"
              value={this.state.password2}
              valid={this.state.validate.password2State === "has-success"}
              invalid={this.state.validate.password2State === "has-danger"}
              onChange={e => {
                this.passwordMatch(e);

                this.handleChange(e);
              }}
            />
            <i
              onClick={() => this.typefield()}
              className={`far fa-eye ${this.state.clickedStyle}`}
            />
            Show Password
            <FormFeedback valid>Email Matches</FormFeedback>
            <FormFeedback invalid>Email Does Not Match</FormFeedback>
          </FormGroup>

          <div className="form-buttons">
            {/* making the type of this as a submit works 
          so the user can click or hit enter  */}
            <Button type="submit" color="success">
              Sign Up
            </Button>
          </div>
          <div className="form-footer">
            {`Already have an account `}
            {<Link to="/signin">Sign In</Link>}, return
            {<Link to="/"> Home</Link>}
          </div>
        </Form>
      </div>
    );
  }
}
export default Signup;

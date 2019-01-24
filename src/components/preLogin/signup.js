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
    this.handleChange = this.handleChange.bind(this);
  }
  // this function runs basic regualar expression to check that the email is formatted correctly
  validateEmail(e) {
    const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // deconstruct validate from the object we set on state
    const { validate } = this.state;
    // we test the value we passed in  and if it passed return success or failure
    if (emailRex.test(e.target.value)) {
      validate.emailState = "has-success";
    } else {
      validate.emailState = "has-danger";
    }
    // set that object back on state
    this.setState({ validate });
  }
  // this function uses regualar expression to check password strength 
  passwordStrength(e) {
    // I found this regex line is very basic and just checks for length that it has a digit in it
    const mediumRegex = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/;
    // deconstruct the validate from state
    const { validate } = this.state;
    // we test that if the value passes the regex
    if (mediumRegex.test(e.target.value)) {
      validate.passwordState = "has-success";
    } else {
      validate.passwordState = "has-danger";
    }
    // we set that new value onto state
    this.setState({ validate });
  }
  // this checks the first the email from the value passed in matches the email on state
  // the value is the second email input
  emailMatch = e => {
    const { validate } = this.state;
    if (e.target.value === this.state.email) {
      validate.checkEmailState = "has-success";
    } else {
      validate.checkEmailState = "has-danger";
    }
    this.setState({ validate });
  };
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
  //  this will handle the change from the input
  handleChange = event => {
    // deconstruct taget from event
    const { target } = event;
    // deconstruct value from target
    const {value} = target;
    // deconstruct the name from the target
    const { name } = target;
    // I could have just dne this.setState({[event.target.name]:event.target.value})
    // I just wanted to build it diffent for fun, I don't know if I like how many lines it is.
    // set the value on the name
    this.setState({
      [name]: value
    });
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
      .then(resp => {
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
              placeholder="myemail@email.com"
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
            </FormFeedback>{" "}
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
            />{" "}
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
          </div>{" "}
          <div className="form-footer">
            {`Already have an account `}
            {<Link to="/signin">Sign In</Link>}, return
            {<Link to="/"> Home</Link>}.
          </div>
        </Form>
      </div>
    );
  }
}
export default Signup;

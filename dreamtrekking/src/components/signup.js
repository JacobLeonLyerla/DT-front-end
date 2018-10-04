import React, { Component } from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
  FormText,
  Button
} from "reactstrap";
import { Link } from "react-router-dom";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      checkEmail: "",
      password: "",
      checkPassword:"",
      validate: {
        emailState: "",
        checkEmailState:"",
        passwordState:"",
        checkPasswordState:""
      },
  
    };
    this.handleChange = this.handleChange.bind(this);
  }
  validateEmail(e) {
    const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const { validate } = this.state;
    if (emailRex.test(e.target.value)) {
      validate.emailState = "has-success";
    } else {
      validate.emailState = "has-danger";
    }
    this.setState({ validate });
  }
  passwordStrength(e) {
    const mediumRegex =  /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/;
    const { validate } = this.state;
    if (mediumRegex.test(e.target.value)) {
      validate.passwordState = "has-success";
    } else {
      validate.passwordState = "has-danger";
    }
    this.setState({ validate });
  }
  emailMatch = e => {
    const { validate } = this.state;
    if (e.target.value === this.state.email) {
      console.log("matches")
      validate.checkEmailState = "has-success";
    }else{
      validate.checkEmailState ="has-danger"
    }
    this.setState({ validate });
  };
  passwordMatch = e => {
    const { validate } = this.state;
    if (e.target.value === this.state.password) {
      console.log("matches")
      validate.checkPasswordState = "has-success";
    }else{
      validate.checkPasswordState ="has-danger"
    }
    this.setState({ validate });
  };
  handleChange =  event => {
    const { target } = event;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const { name } = target;
     this.setState({
      [name]: value
    });
  };
  render() {
    return (
      <div className="signup-container">
        <Form className="signup-form">
          <FormGroup>
            <Label for="username">Please Enter a Username</Label>
            <Input  />
            <FormFeedback valid>Sweet! that name is available</FormFeedback>
          </FormGroup>

          <FormGroup>
            <Label for="exampleEmail">Please Enter Email Address</Label>
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
              That's a tasty looking email you've got there.
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
            <Input
              type="password"
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
              type="password"
              name="checkPassword"
              id="checkPassword"
              value={this.state.checkPassword}
              valid={this.state.validate.checkPasswordState === "has-success"}
              invalid={this.state.validate.checkPasswordState === "has-danger"}
              onChange={e => { 
                 this.passwordMatch(e);
                this.handleChange(e);
               
              }}
            />
           <FormFeedback valid>Email Matches</FormFeedback>
            <FormFeedback invalid>Email Does Not Match</FormFeedback>
          </FormGroup>
          <div className="form-buttons">
            <Button color="success">Sign-up</Button>
            <Link to="/">
              <Button color="primary">Cancel</Button>
            </Link>
          </div>
        </Form>
      </div>
    );
  }
}
export default Signup;

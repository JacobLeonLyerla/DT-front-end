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
      validate: {
        emailState: "",
        dupemail:""
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
              placeholder="myemail@dasdsads.com"
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

            <FormText>Example help text that remains unchanged.</FormText>
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Please Enter a Password</Label>
            <Input  />
            <FormFeedback>Oh noes! that name is already taken</FormFeedback>
            <FormText>Example help text that remains unchanged.</FormText>
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Please Re-type Enter a Password</Label>
            <Input  />
            <FormFeedback invalid>
              Oh noes! that name is already taken
            </FormFeedback>
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

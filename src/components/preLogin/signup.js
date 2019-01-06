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
      clickedStyle:"unclicked",
      validate: {
        emailState: "",
        checkEmailState: "",
        passwordState: "",
        password2State: ""
      }
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
    const mediumRegex = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/;
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
      validate.checkEmailState = "has-success";
    } else {
      validate.checkEmailState = "has-danger";
    }
    this.setState({ validate });
  };
  passwordMatch = e => {
    const { validate } = this.state;
    if (e.target.value === this.state.password) {
      validate.password2State = "has-success";
    } else {
      validate.password2State = "has-danger";
    }
    this.setState({ validate });
  };
  handleChange = event => {
    const { target } = event;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const { name } = target;
    this.setState({
      [name]: value
    });
  };
  typefield = () => {
    if (this.state.passwordType === "password") {
      this.setState({ passwordType: "text",clickedStyle:"clicked" });
    } else {
      this.setState({ passwordType: "password",clickedStyle:"unclicked" });
    }
  };
  handleSubmit = e => {
    e.preventDefault();
    const user = {
      username: this.state.username,
      password: this.state.password,
      password2: this.state.password2,
      email: this.state.email
    };
    axios
      .post("https://dt-back-end.herokuapp.com/auth/register", user)
      .then(resp => {
        this.props.history.push("/signin");
      });
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
        <Form onSubmit={this.handleSubmit} className="signup-form">
          <FormGroup>
            <Label for="username">Please Enter a Username</Label>
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
           <i onClick={() => this.typefield()} className={`far fa-eye ${this.state.clickedStyle}`} /> Show Password
            <FormFeedback valid>Email Matches</FormFeedback>
            <FormFeedback invalid>Email Does Not Match</FormFeedback>
          </FormGroup>
          <div className="form-buttons">
            <Button type="submit" color="success">
              Sign Up
            </Button>
          </div>{" "}
          <div className="form-footer">
            {`Already have an account `}
            {<Link to="/#/signin">Sign In</Link>}, return{<Link to="/"> Home</Link>}. 
          </div>
        </Form>
      </div>
    );
  }
}
export default Signup;

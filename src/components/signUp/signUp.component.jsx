import React, { useContext, useState } from "react";
import AppContext from "../../context";
import { withRouter } from "react-router";

import {
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
  Button,
} from "reactstrap";

import { Link } from "react-router-dom";
import {
  validateEmail,
  passwordStrength,
  emailMatch,
  passwordMatch,
} from "../../helpers/signupHelpers";

const SignUp = ({ history }) => {
  const {
    username,
    setUsername,
    password,
    setPassword,
    email,
    setEmail,
    checkPassword,
    setCheckPassword,
    gotoDashboard,
    createAndSignInUser,
    setGotoDashboard,
  } = useContext(AppContext);
  const [checkEmail, setCheckEmail] = useState("");
  const [passwordType, setPasswordType] = useState("password");
  const [clickedStyle, setClickedStyle] = useState("unclicked");
  const [validate, setValidate] = useState({
    validate: {
      emailState: "",

      checkEmailState: "",

      passwordState: "",

      password2State: "",
    },
  });
  if (gotoDashboard) {
    history.push("/dashboard");
    setGotoDashboard(!gotoDashboard);
  }
  const typefield = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      setClickedStyle("clicked");
    } else {
      setPasswordType("password");
      setClickedStyle("unclicked");
    }
  };

  return (
    <div className="signup-container">
      <Form onSubmit={createAndSignInUser} className="signup-form">
        <FormGroup>
          <Label for="username">Please Enter a Username</Label>
          <Input
            type="username"
            name="username"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <FormFeedback valid>Sweet! that name is available</FormFeedback>
        </FormGroup>

        <FormGroup>
          <Label for="exampleEmail">Please Enter Email Address</Label>

          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="Email@Email.com"
            value={email}
            valid={validate.emailState === "has-success"}
            invalid={validate.emailState === "has-danger"}
            onChange={(e) => {
              validateEmail(e, validate, setValidate);

              setEmail(e.target.value);
            }}
          />
          <FormFeedback valid>
            That's a good looking email you've got there.
          </FormFeedback>

          <FormFeedback invalid>
            Uh oh! Looks like there is an issue with your email. Please input a
            correct email.
          </FormFeedback>
        </FormGroup>

        <FormGroup>
          <Label for="checkEmail">Please Re-type Email Address</Label>

          <Input
            type="email"
            name="checkEmail"
            id="checkEmail"
            value={checkEmail}
            valid={validate.checkEmailState === "has-success"}
            invalid={validate.checkEmailState === "has-danger"}
            onChange={(e) => {
              emailMatch(e, validate, setValidate, email);
              setCheckEmail(e.target.value);
            }}
          />
          <FormFeedback valid>Email Matches</FormFeedback>

          <FormFeedback invalid>Email Does Not Match</FormFeedback>
        </FormGroup>

        <FormGroup>
          <Label for="examplePassword">Please Enter a Password</Label>

          <br />

          <Input
            type={passwordType}
            name="password"
            id="examplePassword"
            value={password}
            valid={validate.passwordState === "has-success"}
            invalid={validate.passwordState === "has-danger"}
            onChange={(e) => {
              passwordStrength(e, validate, setValidate, password);

              setPassword(e.target.value);
            }}
          />

          <FormFeedback valid>Strong!</FormFeedback>

          <FormFeedback invalid>Password Not Strong Enough</FormFeedback>
        </FormGroup>

        <FormGroup>
          <Label for="checkPasswrod">Please Re-type Enter a Password</Label>
          <Input
            type={passwordType}
            name="password2"
            id="password2"
            value={checkPassword}
            valid={validate.password2State === "has-success"}
            invalid={validate.password2State === "has-danger"}
            onChange={(e) => {
              passwordMatch(e, validate, setValidate, password);

              setCheckPassword(e.target.value);
            }}
          />
          <i
            onClick={() => typefield()}
            className={`far fa-eye ${clickedStyle}`}
          />
          Show Password
          <FormFeedback valid>Password Matches</FormFeedback>
          <FormFeedback invalid>Password Does Not Match</FormFeedback>
        </FormGroup>

        <div className="form-buttons">
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
};

export default withRouter(SignUp);

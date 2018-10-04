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

  validateEmail(e) {
    const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const { validate } = this.state
      if (emailRex.test(e.target.value)) {
        validate.emailState = 'has-success'
      } else {
        validate.emailState = 'has-danger'
      }
      this.setState({ validate })
    }
  render() {
    return (
      <div className="signup-container">
        <Form className="signup-form">
        <FormGroup>
            <Label for="username">Please Enter a Username</Label>
            <Input valid />
            <FormFeedback valid>Sweet! that name is available</FormFeedback>
          </FormGroup>

        <FormGroup>
            <Label for="exampleEmail">Please Enter Email Address</Label>
            <Input valid />
            <FormFeedback valid>Sweet! that name is available</FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Please Re-type Email Address</Label>
            <Input valid />
            <FormFeedback valid>Sweet! that name is available</FormFeedback>
            <FormText>Example help text that remains unchanged.</FormText>
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Please Enter a Password</Label>
            <Input invalid />
            <FormFeedback>Oh noes! that name is already taken</FormFeedback>
            <FormText>Example help text that remains unchanged.</FormText>
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Please Re-type Enter a Password</Label>
            <Input invalid />
            <FormFeedback invalid>Oh noes! that name is already taken</FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Valid input</Label>
            <Input valid />
          </FormGroup>
          <div className="form-buttons">
            <Button color="success">Submit</Button>
           <Link to="/"><Button color="primary">Cancel</Button></Link>
          </div>
        </Form>
      </div>
    );
  }
}
export default Signup;

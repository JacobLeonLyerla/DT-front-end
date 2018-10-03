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

class Signup extends Component {
  render() {
    return (
      <div className="signup-container">
        <Form className="signup-form">
          <FormGroup>
            <Label for="exampleEmail">Input without validation</Label>
            <Input />
            <FormFeedback>You will not be able to see this</FormFeedback>
            <FormText>Example help text that remains unchanged.</FormText>
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Valid input</Label>
            <Input valid />
            <FormFeedback valid>Sweet! that name is available</FormFeedback>
            <FormText>Example help text that remains unchanged.</FormText>
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Invalid input</Label>
            <Input invalid />
            <FormFeedback>Oh noes! that name is already taken</FormFeedback>
            <FormText>Example help text that remains unchanged.</FormText>
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Input without validation</Label>
            <Input />
            <FormFeedback tooltip>
              You will not be able to see this
            </FormFeedback>
            <FormText>Example help text that remains unchanged.</FormText>
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Valid input</Label>
            <Input valid />
    
            <FormText>Example help text that remains unchanged.</FormText>
          </FormGroup>
          <div className="form-buttons">
            <Button color="success">Submit</Button>
            <Button color="primary">Cancel</Button>
          </div>
        </Form>
      </div>
    );
  }
}
export default Signup;

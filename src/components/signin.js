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
      username:"",
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
  handleSubmit = e => {
    const user = {
      username: this.state.username,
      password: this.state.password
    };
    axios
      .post("https://dt-back-end.herokuapp.com/auth/login", user)
      .then(resp => {
        localStorage.setItem("token", `Bearer ${resp.data.token}`);

        // const { setLogin } = this.props.context.actions;
        // setLogin(resp.data.user);
        this.props.loadPictures()
        this.props.history.push("/dashboard");
      }).catch(err=>{
      })
  };

  render() {
    return (
      <div className="signup-container">
        <Form onSubmit={this.handleSubmit} className="signup-form">
          <FormGroup>
            <Label for="exampleEmail">Please Enter username</Label>
            <Input
              type="username"
              name="username"
              id="username"
              // placeholder="myemail@email.com"
              // value={this.state.email}
              // valid={this.state.validate.emailState === "has-success"}
              // invalid={this.state.validate.emailState === "has-danger"}
              onChange={e => {
                // this.validateEmail(e);
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
            <Label for="examplePassword">Please Enter a Password</Label>
            <Input 
                 type="password"
                 name="password"
                 id="password"
                 onChange={this.handleChange}
            />
            <FormFeedback>Oh noes! that name is already taken</FormFeedback>
          </FormGroup>
          <div className="form-buttons">
           <Button  onClick={()=>this.handleSubmit()} color="success">Sign-in</Button>
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

import React, { useContext } from "react";
import { FormGroup, Label, Input, Button } from "reactstrap";
import AppContext from "../../context";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

const SignIn = ({ history }) => {
  const {
    signInUser,
    setUsername,
    setPassword,
    username,
    password,
    gotoDashboard,
    setGotoDashboard,
  } = useContext(AppContext);
  const signInClick = (e) => {
    e.preventDefault();

    signInUser()

  };
    if (gotoDashboard) {
      history.push("/dashboard");
      setGotoDashboard(!gotoDashboard);
    }
  return (
    <div className="signup-container">
      <form onSubmit={signInClick} className="signup-form">
        <FormGroup>
          <Label for="exampleEmail">Please Enter username</Label>

          <Input
            type="username"
            name="username"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Label for="examplePassword">Please Enter a Password</Label>

          <Input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
};

export default withRouter(SignIn);

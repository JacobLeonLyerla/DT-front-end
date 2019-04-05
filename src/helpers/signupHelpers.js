// this function runs basic regualar expression to check that the email is formatted correctly
export function validateEmail(e) {
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
   export function passwordStrength(e) {
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
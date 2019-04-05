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
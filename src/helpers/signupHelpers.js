// this function runs basic regualar expression to check that the email is formatted correctly
export function validateEmail(e,validate,setValidate) {
  const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  // deconstruct validate from the object we set on state
 const tempValidationObj =validate
  // we test the value we passed in  and if it passed return success or failure
  if (emailRex.test(e.target.value)) {
      tempValidationObj.emailState = "has-success";
  } else {
      tempValidationObj.emailState = "has-danger";
  }

  // set that object back on state
  setValidate(tempValidationObj);
}

// this function uses regualar expression to check password strength
export function passwordStrength(e,validate,setValidate,password) {
  // I found this regex line is very basic and just checks for length that it has a digit in it
  const mediumRegex = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/;

  // deconstruct the validate from state
  const tempValidationObj = validate
  // we test that if the value passes the regex
  if (mediumRegex.test(e.target.value)) {
    tempValidationObj.passwordState = "has-success";
  } else {
    tempValidationObj.passwordState = "has-danger";
  }
  // we set that new value onto state
  setValidate( tempValidationObj );
}

// this checks the first the email from the value passed in matches the email on state
// the value is the second email input
export function emailMatch(e,validate,setValidate,email) {
  console.log(email,e.target.value)
  const tempValidationObj =validate

  if (e.target.value === email) {
    tempValidationObj.checkEmailState = "has-success";
  } else {
    tempValidationObj.checkEmailState = "has-danger";
  }
  setValidate( tempValidationObj );
}
export const passwordMatch = (e,validate,setValidate,password) => {


  const tempValidationObj =validate

  if (e.target.value ===password) {
    validate.password2State = "has-success";
  } else {
    validate.password2State = "has-danger";
  }

  setValidate( tempValidationObj );
};
const checked = (id, type,tags =[]) => {
if(tags){
    //  this checks the tags array on state, returns an array that has everything except the id
    let filteredArr =  tags.filter(value => {
      return value !== id;
    });

    // if the id passed in was removed from  than the array on state will be longer than the filtered array

    // however if the id was not insider of the state array nothing will be filteter so they will be the size

    // when the type is not dropdown-check and length is less than what is on state we return checked
    if (
      filteredArr.length < tags.length &&
      type !== "dropdown-check"
    ) {
      return "checked";
    }
    // when it is dropdown-check and it's less than what is on state we return dropdown-check
    if (
      filteredArr.length < tags.length &&
      type === "dropdown-check"
    ) {
      return "dropdown-check";
    }
}
  };
  export default checked
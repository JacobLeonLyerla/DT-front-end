
const filterTags =(id,tags)=> {

    // set our tags array from state into a variable

  
    // return an array that has everything except for the id value

    const filteredArr = tags.filter(value => {
      return value !== id;
    });

    // if after our filter the length is the same that means nothing was filtered
    // so we can just push in the id into the array because we know it was not on there already
    if (filteredArr.length === tags.length) {
      filteredArr.push(id);
    }

    // when the if above was not true than id is not pushed into the filtered array

    // that means that the now filtered array that does not have our id is now set on state

    // when the if is true than we add the id to the array and add that to state
   
   return  filteredArr

  }
  export default filterTags
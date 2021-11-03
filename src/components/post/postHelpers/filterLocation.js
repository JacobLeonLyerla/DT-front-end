const filterLocations=(id)=>{
    let array = this.state.location;

    let filteredArr = array.filter(value => {
      return value !== id;
    });
    if (filteredArr.length === array.length) {
      filteredArr.push(id);
    }

   return filteredArr;
}
export default filterLocations
const filterLocations=(id,tags)=>{
    let array = tags;

    let filteredArr = tags.filter(value => {
      return value !== id;
    });
    if (filteredArr.length === tags.length) {
      filteredArr.push(id);
    }

   return filteredArr;
}
export default filterLocations
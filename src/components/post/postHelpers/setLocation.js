  import React,{useContext} from "react";
  import AppContext from "../../../context";
  const setLocation = (cords, name, type) => {
    const {filteredTagsArr,setFilteredLocationsArr} = useContext(AppContext)
    // when the type is location it will create an object passing in the cords
    // the cords is lat and lng and than it also adds on the name
    if (type === "location") {
      let location = this.state.location;

      let placeObj = {};

      placeObj.name = name;

      placeObj.cords = cords;

      location.push(placeObj);

      setFilteredLocationsArr([...filteredTagsArr, location] );
    }
    }
    export default setLocation
import React,{useContext} from 'react'
import AppContext from '../../../context';
import filterLocations from './filterLocation';
const Locations = () => {
    const {filteredLocationsArr,setFilteredLocationsArr} = useContext(AppContext);
    return filteredLocationsArr.map(location => (
        <Badge onClick={() => setFilteredLocationsArr(filterLocations(location))}>
          {location.name}
        </Badge>
      ));
}

export default Locations

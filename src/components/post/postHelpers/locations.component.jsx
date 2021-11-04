import React,{useContext} from 'react'
import AppContext from '../../../context';
import filterLocations from './filterLocation';
import { Badge } from 'reactstrap';
const Locations = () => {
    const {filteredLocationsArr,setFilteredLocationsArr} = useContext(AppContext);
    return filteredLocationsArr.map(location => (
        <Badge onClick={() => setFilteredLocationsArr(filterLocations(location,filteredLocationsArr))}>
          {location.name}
        </Badge>
      ));
}

export default Locations

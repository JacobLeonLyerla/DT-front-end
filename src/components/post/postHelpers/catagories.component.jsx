import React,{useContext} from 'react'
import AppContext from '../../../context'
import checked from './checked';
import filterTags from './filterTags';
import { DropdownItem } from 'reactstrap';
const Catagories = ({pictures}) => {
  const {setFilteredTagsArr,filteredTagsArr} = useContext(AppContext);
  
        return pictures.map(tag => (
            <>
              <DropdownItem
                className={`${checked(tag.name, "dropdown-check", filteredTagsArr)}`}
                onClick={() => setFilteredTagsArr(filterTags(tag.name, filteredTagsArr))}
              >
                {tag.name.replace(/-/g, " ")}
              </DropdownItem>
            </>
        ))
}

export default Catagories

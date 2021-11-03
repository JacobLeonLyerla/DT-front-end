import React,{useContext} from 'react'
import filterTags from './filterTags'
import AppContext from '../../../context'
import { Badge } from 'reactstrap'
const PickedTags = () => {
    const {filteredTagsArr,setFilteredTagsArr}= useContext(AppContext)
    console.log(filteredTagsArr)
    return filteredTagsArr.map(tag => (
        <Badge onClick={() => setFilteredTagsArr(filterTags(tag,filteredTagsArr))}>
          {tag.replace(/-/g, " ")}
        </Badge>))
}

export default PickedTags

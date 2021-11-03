import React,{useContext} from 'react'
import AppContext from '../../context';
import Geosuggest from '../dashboard/geosuggest';
import setLocation from './postHelpers/setLocation';
import {
    Button,
    Col,
    Row,
    Badge,
    Form,
    Input,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter
  } from "reactstrap";
  import Catagories from './postHelpers/catagories.component';
  import PickedTags from './postHelpers/pickedTags.component';
  import Locations from './postHelpers/locations.component';
const PostForm = () => {
    const { pictures,setCurrentToggleState,toggle,title,description,setTitle,setDescription,filteredLocationsArr, filteredTagsArr,setToggle } = useContext(AppContext);

    return (
        
            <>
              {/* this is our dropdown we call render categories to fill out the dropdown  */}
              <Form className="create-form">
                <UncontrolledDropdown direction="left">
                  <DropdownToggle  color="primary" caret>
                    Tags
                  </DropdownToggle>
      
                  <DropdownMenu><Catagories pictures={pictures}/></DropdownMenu>
                </UncontrolledDropdown>
      
                {/* title input is here this is where the name input is rendered  */}
                <div className="text-left">Title</div>
      
                <Input
                  name="title"
                  value={title}
                  onChange={(e)=>setTitle(e.target.value)}
                />
      
                {/* this is where our badges for the tags is rendered right under the title input bar */}
                <div className="tag-badge">{filteredTagsArr.length>0?<PickedTags/>:null}</div>
      
                {/* description input is rendered here we use this for the user to type in thier description */}
                <div className="text-left">Description</div>
      
                <Input
                  type="textarea"
                  style={{ height: "30vh" }}
                  name="description"
                  value={description}
                  onChange={(e)=>setDescription(e.target.value)}
                />
                {/* the location is rendered right below the description input box */}
                {filteredLocationsArr.length>0?<Locations/>:null}
      
                <br />
      
                <br />
                {/* this button is to render our modal that allows us to set up the user location  */}
                <Button className="btn-location" onClick={setToggle}>
                  Add Location
                </Button>
      
                <Modal
                  isOpen={toggle}
                  toggle={setCurrentToggleState}
                  className={` geo-modal`}
                >
                  <ModalHeader toggle={setToggle}>select location</ModalHeader>
      
                  <ModalBody>
                    <div className="modal-badges">{filteredLocationsArr.length>0?<Locations/>:null}</div>
      
                    <Geosuggest
                      setLocation={setLocation}
                      name={"location"}
                      placeholder={"Add Location"}
                    />
                  </ModalBody>
      
                  <ModalFooter>
                    <Button color="secondary" onClick={setToggle}>
                      Close
                    </Button>
                  </ModalFooter>
                </Modal>
              </Form>
            </>
          );
    
}

export default PostForm

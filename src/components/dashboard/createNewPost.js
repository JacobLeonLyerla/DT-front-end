import React, { Component, Fragment } from "react";

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

import Geosuggest from "./geosuggest";

import axios from "axios";
// this is for importing our imgs from our assets folder

import imgs from "../../assets/exportImgs.js";

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false,

      tags: [],

      name: "",

      user: "",

      country: "",

      region: "",

      city: "",

      description: "",

      location: []
    };

    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  // this is set location it takes cords name and uses the type to filer
  setLocation = (cords, name, type) => {
    // when the type is location it will create an object passing in the cords
    // the cords is lat and lng and than it also adds on the name
    if (type === "location") {
      let location = this.state.location;

      let placeObj = {};

      placeObj.name = name;

      placeObj.cords = cords;

      location.push(placeObj);

      this.setState({ location });
    }
    // if the type is just a country than just pass in the country name
    if (type === "country") {
      this.setState({ country: name });
    }
  };
  // this will be excuted whenever the component is rendered

  // this will render the categories
  renderCategories = () => {
    // when the length of the pictures array is greater than 0 the code for this will excute
    if (this.props.pictures.length > 0) {
      // we than map over the pictures array
      return this.props.pictures.map(tag => (
        <Fragment>
          {/* the classname is based off of what is returned by the checked function

          that allows us to check change styling of the dropdown items as the user selects them 

          filter tags adds thetags to an array if they are not in it, but if they are it removes them

          */}
          <DropdownItem
            className={`${this.checked(tag.name, "dropdown-check")}`}
            onClick={() => this.filterTags(tag.name)}
          >
            {tag.name.replace(/-/g, " ")}
          </DropdownItem>
        </Fragment>
      ));
    }
  };
  // this funtion is to render the category pictures
  renderPictures = () => {
    let arr = [];

    if (this.props.pictures !== undefined) {
      if (this.props.pictures.length > 0) {
        this.props.pictures.forEach(e => {
          arr.push(e.name);
        });
      }
    }
    if (this.props.imgTag !== undefined) {
      if (this.props.imgTag.length > 0) {
        arr = this.props.imgTag;
      }
    }
    if (arr.length > 0) {
      return arr.map(img => {
        return (
          // we also user filter tags and we use an intline style to set the background image
          <Col
            data-ca="ca"
            onClick={() => this.filterTags(img)}
            style={{
              backgroundImage: `url(${
                imgs[img.replace(/-/g, "").toLowerCase()]
              })`
            }}
            className={`tag-img tags`}
            md="6"
          >
            {/* we use checked to change the style of this div as well */}
            <div className={`cover ${this.checked(img)}`}>
              <p>{img.replace(/-/g, " ")}</p>
            </div>
          </Col>
        );
      });
    }
  };
  // this function is for setting the styles of the tags inside of the drop down
  // and for the images based on if they are in our tag array or not
  checked = (id, type) => {
    //  this checks the tags array on state, returns an array that has everything except the id
    let filteredArr = this.state.tags.filter(value => {
      return value !== id;
    });
    // if the id passed in was removed from  than the array on state will be longer than the filtered array

    // however if the id was not insider of the state array nothing will be filteter so they will be the size

    // when the type is not dropdown-check and length is less than what is on state we return checked
    if (
      filteredArr.length < this.state.tags.length &&
      type !== "dropdown-check"
    ) {
      return "checked";
    }
    // when it is dropdown-check and it's less than what is on state we return dropdown-check
    if (
      filteredArr.length < this.state.tags.length &&
      type === "dropdown-check"
    ) {
      return "dropdown-check";
    }
  };
  // this is our filter tag function it takes an id

  // and either adds it or removes it from our array on state

  filterTags(id) {
    // set our tags array from state into a variable

    let array = this.state.tags;

    // return an array that has everything except for the id value

    let filteredArr = array.filter(value => {
      return value !== id;
    });

    // if after our filter the length is the same that means nothing was filtered
    // so we can just push in the id into the array because we know it was not on there already
    if (filteredArr.length === array.length) {
      filteredArr.push(id);
    }
    // when the if above was not true than id is not pushed into the filtered array

    // that means that the now filtered array that does not have our id is now set on state

    // when the if is true than we add the id to the array and add that to state
    this.setState({ tags: filteredArr });
  }

  // everytihng here is the same as the code above however this filters the location array
  // and not our tags array, for when the user uses geosuggest to pick locations
  filterLocation(id) {
    let array = this.state.location;

    let filteredArr = array.filter(value => {
      return value !== id;
    });
    if (filteredArr.length === array.length) {
      filteredArr.push(id);
    }

    this.setState({ location: filteredArr });
  }
  // this renders the tags that we filtered

  // it just makes sure the tags array has at least one item

  // and than it renderes it as a badge

  // one cool thing about this is the badge has an on click

  // that allows the user to remove a tag by clicking it's badge

  // so you can click on the picture, the name in the drop down or the badge itself to remvoe a tag

  renderPickedTags = () => {
    if (this.state.tags.length > 0) {
      return this.state.tags.map(tag => (
        <Badge onClick={() => this.filterTags(tag)}>
          {tag.replace(/-/g, " ")}
        </Badge>
      ));
    }
  };

  // this is the same as above but for locations, looking back at this component i could have definitly made this more reuseable

  renderLocations = () => {
    if (this.state.location.length > 0) {
      return this.state.location.map(location => (
        <Badge onClick={() => this.filterLocation(location)}>
          {location.name}
        </Badge>
      ));
    }
  };

  // this handle input thakes the target name and value and uses that to set our state
  handleInput = input => {
    this.setState({ [input.target.name]: input.target.value });
  };
  // handle submit is our big function for this component
  // it takes our data and builds our object for creating a post
  handleSubmit = () => {
    // set our variables we shift off the first location in our location array
    // we use that as our main location so whatever is put in first is the users main location
    let location = this.state.location;

    let mainLocation = location.shift();

    //  set up an empty object when the name description and tag and location length is not 0
    let post = {};

    if (
      this.state.description !== "" &&
      this.state.name !== "" &&
      this.state.tags.length > 0 &&
      this.state.location.length > 0
    ) {
      // set up keys and values for post object
      post.user = this.props.user.username;

      post.tag = this.state.tags;

      post.description = this.state.description;

      post.name = this.state.name;
      post.city = this.state.city;

      post.region = this.state.region;

      post.country = this.state.country;

      post.latStart = mainLocation.cords.lat;

      post.lngStart = mainLocation.cords.lng;

      post.locationName = mainLocation.name;

      post.markers = location;
    }
    // pass in our  object into our list of tags
    axios
      .post("https://dt-back-end.herokuapp.com/tags", post)
      .then(response => {
        // set up empty object
        let postId = {};

        // pull the user post from the props and set it into the key of post on our postId object
        postId.post = this.props.user.post;

        // after we push the new post into that array
        postId.post.push(response.data._id);

        // when then put that new array of post onto the user
        axios
          .put(
            `https://dt-back-end.herokuapp.com/users/${this.props.user._id}`,
            postId
          )

          .then(() => {
            // after we move the user to thier post page
            this.props.history.push(
              `/dashboard/${this.props.user.username}/post`
            );
          })
          .catch(() => {});
        // reset the state

        this.setState({
          tags: [],

          name: "",

          user: "",

          country: "",

          region: "",

          city: "",

          description: "",

          location: []
        });
      })
      .catch(() => {});
  };
  // ourform is all rendered inside of this funtion
  Form = () => {
    return (
      <Fragment>
        {/* this is our dropdown we call render categories to fill out the dropdown  */}
        <Form className="create-form">
          <UncontrolledDropdown direction="left">
            <DropdownToggle className={this.props.btn} color="primary" caret>
              Tags
            </DropdownToggle>

            <DropdownMenu>{this.renderCategories()}</DropdownMenu>
          </UncontrolledDropdown>

          {/* title input is here this is where the name input is rendered  */}
          <div className="text-left">Title</div>

          <Input
            name="name"
            value={this.state.name}
            onChange={this.handleInput}
          />

          {/* this is where our badges for the tags is rendered right under the title input bar */}
          <div className="tag-badge">{this.renderPickedTags()}</div>

          {/* description input is rendered here we use this for the user to type in thier description */}
          <div className="text-left">Description</div>

          <Input
            type="textarea"
            style={{ height: "30vh" }}
            name="description"
            value={this.state.description}
            onChange={this.handleInput}
          />
          {/* the location is rendered right below the description input box */}
          {this.renderLocations()}

          <br />

          <br />
          {/* this button is to render our modal that allows us to set up the user location  */}
          <Button className="btn-location" onClick={this.toggle}>
            Add Location
          </Button>

          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            className={`${this.props.className} geo-modal`}
          >
            <ModalHeader toggle={this.toggle}>select location</ModalHeader>

            <ModalBody>
              <div className="modal-badges">{this.renderLocations()}</div>

              <Geosuggest
                setLocation={this.setLocation}
                name={"location"}
                placeholder={"Add Location"}
              />
            </ModalBody>

            <ModalFooter>
              <Button color="secondary" onClick={this.toggle}>
                Close
              </Button>
            </ModalFooter>
          </Modal>
        </Form>
      </Fragment>
    );
  };

  render() {
    return (
      <Col md={`${10 + this.props.tagVar}`} className="tags-container">
        {this.Form()}

        <Button onClick={() => this.handleSubmit()} className="create-button">
          Create New Post
        </Button>

        <Row>{this.renderPictures()}</Row>
      </Col>
    );
  }
}

export default Post;

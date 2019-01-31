import React, { Component, Fragment } from "react";
import axios from "axios";
import { Table, Col, Button } from "reactstrap";
import imgs from "../../assets/exportImgs.js";
import { Link } from "react-router-dom";
import Map from "./googleMaps";
import Pictures from "./renderPictures.js";

class TagView extends Component {
  state = {
    tagArr: [{ tag: "" }],
    tag: "",
    flag: false,
    picture: {},
    imgTag: [],
    imgName: "",
    lat: 100000000000000000
  };
  // when this component renders it will call this function loadinfo
  componentDidMount() {
    this.loadinfo();
  }
  // loadinfo is used to pull post out of the database
  loadinfo = () => {

    // it is protected so we have to pass in our token
    const token = localStorage.getItem("token");
    // we build an object to pass in as our header
    const requestOptions = {
      headers: {
        Authorization: token
      }
    };
    // we call the tags endpoint
    axios
      .get("https://dt-back-end.herokuapp.com/pictures", requestOptions)
      .then(response => {
        // when a requst is successfull the code here is excuted
        // set up an array for pictures
        let pictureArr = [];
        // iterate over our response data from our axios call
        response.data.forEach(picture => {
          // when the name of the picture equals the same thing as the tag than we push it in
          if (picture.name.toLowerCase() === this.state.tag.toLowerCase()) {
            pictureArr.push(picture);
          }
        });
        // set up variables to store on state
        let tag = pictureArr[0].tag;
        let name = pictureArr[0].name;
        pictureArr = pictureArr.shift();
        this.setState({
          picture: pictureArr,
          imgTag: tag,
          imgName: name,
          lat: pictureArr.lat
        });
      })
      .catch(err => {
        // when the axios call fails it pushes to dashboard
        this.props.history.push("/dashboard");
      });
      axios
      .get("https://dt-back-end.herokuapp.com/tags", requestOptions)
      .then(response => {
        // create an array
        let tagArr = [];
        // iterate over our resposne from our axios call
        response.data.forEach(post => {
          // this iterates though each and pushes in the post
          // that match the main category or tag in this case
          for (let index = 0; index < post.tag.length; index++) {
            if (post.tag[index].toLowerCase() === this.state.tag.toLowerCase()) {
              tagArr.push(post);
            }
          }
        });

        this.setState({ tagArr, });
      })
      .catch(err => {
        this.props.history.push("/");
      });
  };
  // render out our tag arr data
  userSubmissionTable = () => {
    // we return the data we iterated as a jsx element
    return this.state.tagArr.map(sub => (
      // i had to be creative here the LINK from react router dom was causing issues
      // so i made this renderRoute function to push allow the user to route 
        <div
          onClick={() => this.renderRoute(sub._id)}
          className="td-container"
          style={{ display: "flex", flexDirection: "row" }}
        >
          {" "}
          <div className="td">{sub.name}</div>
          <div className="td">
            {sub.locationName ? (
              <Fragment>{sub.locationName}</Fragment>
            ) : (
            null
            )}
          </div>
          {this.renderTags(sub.tag)}
        </div>
      ));
    
  };
  // rnder route passes the user to the create or the actual details
  renderRoute = (id, type) => {
    if (type === "create") {
      this.props.history.push("/dashboard/create");
    } else {
      this.props.history.push(`/dashboard/trek/${id}`);
    }
  };
 // this is for rendering the tags part of our post 
 // the colmn on the right of the table is an array
 // we use this to render out that array and still fit inside of our table correctly
  renderTags = tag => {
    if (tag.length < 1) {
      tag = [];
    }
    if (tag !== undefined || tag !== "") {
      return (
        <div className="td tag">
          {" "}
          {tag.map(tag => (
            <div className="tags">
              {`${tag.replace(/-/g, " ")}`}
              <br />
            </div>
          ))}
        </div>
      );
    }
  };
  // this function pulls the id off of params so sometihng like "africa"
  // and that is used to filter rendering of my other data
  setTag = () => {
    if (this.state.tag === "") {
      let { id } = this.props.match.params;
      this.setState({ tag: id });
    }
  };
  // whenever the path changes this function sees and changes our tag value,
  // and loads our info again
  checkPath = () => {
    if (this.props.match.params.id !== this.state.tag) {
      this.setState({ tag: this.props.match.params.id });
      this.loadinfo();
    }
  };
   // this will render out the pictures at the bottom of the page under the post view
  // so it takes the names of the tags that are tied to the category
  // and it will display them to the user
  renderMainImgs = img => {
    let arr = [];
    if (Array.isArray(img) === false) {
      arr.push(img);
    } else {
      arr = img;
    }

    return arr.map(img => {
      return (
        <Col
          data-ca="ca"
          style={{
            backgroundImage: `url(${imgs[img.replace(/-/g, "").toLowerCase()]})`
          }}
          className={`tag-img tags`}
          md="6"
        >
        {/* when you click the link it will change the route id */}
          <Link
            to={`/dashboard/${img.toLowerCase()}`}
            style={{ textDecoration: "none" }}
          >
        
            <div  className="cover ">
              <p>{img.replace(/-/g, " ")}</p>
            </div>
          </Link>
        </Col>
      );
    });
  };

  render() {
    return (
      <Col className="table-container" md={`${10 + this.props.tagVar}`}>
       {/* when the path changes this function will notice and render this  */}
        {this.checkPath()}
        {/* set up our tags to start with  */}
        {this.setTag()}
        {/* tarnery if the lat is not the value on state or an undefined value
        render the map if not it will just render the img that is is the id */}
        {this.state.lat !== 100000000000000000 &&
        this.state.lat !== undefined ? (
          <Fragment>
            <Map picture={this.state.picture} name={this.state.imgName} />
          </Fragment>
        ) : (
          <Fragment>
            <div
              data-ca="ca"
              style={{
                backgroundImage: `url(${
                  imgs[this.state.imgName.replace(/-/g, "").toLowerCase()]
                })`
              }}
              className={`tag-img tags header-img`}
            >
              <div onClick={() => this.checkPath()} className="cover ">
                <p>{this.state.imgName.replace(/-/g, " ")}</p>
              </div>
            </div>
          </Fragment>
        )}
        <Link
          to={`/dashboard/create/${this.props.user.username}}`}
          style={{ textDecoration: "none" }}
        >
          <Button>New Post</Button>
        </Link>
        <Table className="tags-table">
          <div className="tr">
            <div className="name head">Title</div>
            <div className="city head">Location</div>
            <div className="tags head">Tags</div>
          </div>

          <div className="tbody">
            <div>{this.userSubmissionTable()}</div>
          </div>
        </Table>
        <Pictures imgTag={this.state.imgTag} styleName="tag-filtered" />
      </Col>
    );
  }
}
export default TagView;

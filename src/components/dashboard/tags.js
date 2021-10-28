import React, { Component } from "react";

import { Col } from "reactstrap";

import Pictures from "./renderPictures.js";

class Tags extends Component {



  render() {

    const picture = [
      { name: "Asia",
     tag: [],
     country: "Asia",
   
     region: "Asia",
   
     city: "String",
   
     priority: 1,
   
     createdOn:new Date(),
   },
   { name: "America",
   tag: [],
   country: "Asia",
 
   region: "Asia",
 
   city: "String",
 
   priority: 1,
 
   createdOn:new Date(),
 },
 { name: "China",
 tag: [],
 country: "China",

 region: "Asia",

 city: "String",

 priority: 3,

 createdOn:new Date(),
},
{ name: "Africa",
tag: [],
country: "Africa",

region: "Africa",

city: "Africa",

priority: 2,

createdOn:new Date(),
},
   
   ]
    return (
      // this column is part of the row with dashboard
      // and will be sized based on the variables passed in on props
      <Col md={`${10 + this.props.tagVar}`} className="tags-container">
        {/* we already had the pictures, sent in as props.
      pictures are just the categories that load in.
      so we pass them into our pictures component and it renders them for us
      neat right!? */}
        <Pictures pictures={picture} />
      </Col>
    );
  }
}
export default Tags;

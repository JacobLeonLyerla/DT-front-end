import React, { Component,Fragment } from "react";
import { GoogleMap, Marker } from "react-google-maps"
import Map from "./map";


class Maps extends Component  {
 
  render() {

    return (<Fragment>
      <Map picture={this.props.picture[0]} name={this.props.name}/> 
    </Fragment>);
  }
}
export default Maps;

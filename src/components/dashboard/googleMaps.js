import React, { Component, Fragment } from "react";
import { GoogleMap, Marker } from "react-google-maps";
import Map from "./map";

class Maps extends Component {
  render() {
    return (
      <Fragment>
        {this.props.picture ? (
          <Fragment>
            <Map picture={this.props.picture[0]} name={this.props.name} />
          </Fragment>
        ) : (
          <Fragment>
            <Map
              tag={this.props.tag}
              name={this.props.name}
              markers={this.props.markers}
            />
          </Fragment>
        )}
      </Fragment>
    );
  }
}
export default Maps;

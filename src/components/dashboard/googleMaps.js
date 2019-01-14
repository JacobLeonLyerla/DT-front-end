import React, { Component, Fragment } from "react";
import { GoogleMap, Marker } from "react-google-maps";
import Map from "./map";

class Maps extends Component {
  render() {
    return (
      <Fragment>
        {this.props.picture ? (
          <Fragment>
            <Map zoom={4} picture={this.props.picture} name={this.props.name} />
          </Fragment>
        ) : (
          <Fragment>
            <Map
              zoom={9}
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

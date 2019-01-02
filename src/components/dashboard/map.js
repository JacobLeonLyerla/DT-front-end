import React, { Component, Fragment } from "react";

import {
  withGoogleMap,
  GoogleMap,
  Marker,
  withScriptjs
} from "react-google-maps";

const MapWithAMarker = withGoogleMap(props => {
  console.log(props);
  return (
    <GoogleMap
      defaultZoom={4}
      center={{
        lat: props.defaultCenter.lat, lng: props.defaultCenter.lng
      }}
      defaultCenter={{
        lat: props.defaultCenter.lat,
        lng: props.defaultCenter.lng
      }}
    >
      <Marker
        position={{
          lat: props.defaultCenter.lat,
          lng: props.defaultCenter.lng
        }}
      />
    </GoogleMap>
  );
});
class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultCenter: {
        lat: 0,
        lng: 0
      }
    };
  }

  setupDefault = () => {
    if (this.props.picture !== undefined) {
      if (this.state.defaultCenter.lat === 0) {
        this.setState({
          defaultCenter: {
            lat: this.props.picture.lat,
            lng: this.props.picture.lng
          }
        });
      }
    }
  };
  render() {
    console.log(this.state);
    return (
      <Fragment>
        {this.setupDefault()}
        <MapWithAMarker
          containerElement={<div style={{ height: `45vh` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          defaultCenter={this.state.defaultCenter}
        />
      </Fragment>
    );
  }
}
export default Map;

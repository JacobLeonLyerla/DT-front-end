import React, { Component, Fragment } from "react";

import {
  withGoogleMap,
  GoogleMap,
  Marker,
  withScriptjs
} from "react-google-maps";

const MapWithAMarker = withGoogleMap(props => {
  return (
    <GoogleMap
      defaultZoom={4}
      center={{
        lat: props.defaultCenter.lat,
        lng: props.defaultCenter.lng
      }}
      defaultCenter={{
        lat: props.defaultCenter.lat,
        lng: props.defaultCenter.lng
      }}
    >
      {props.markers ? (
        <Fragment>
          {props.markers.map(marker => {
            return (
              <Fragment>
                <Marker
                  position={{
                    lat: props.defaultCenter.lat,
                    lng: props.defaultCenter.lng
                  }}
                />
                <Marker
                  position={{ lat: marker.cords.lat, lng: marker.cords.lng }}
                  key={marker.name}
                />
              </Fragment>
            );
          })}
        </Fragment>
      ) : (
        <Fragment>
          <Marker
            position={{
              lat: props.defaultCenter.lat,
              lng: props.defaultCenter.lng
            }}
          />
        </Fragment>
      )}
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
      },
      name: ""
    };
  }

  setupDefault = () => {
    if (this.props.picture !== undefined) {
      if (this.state.name !== this.props.name) {
        this.setState({
          defaultCenter: {
            lat: this.props.picture.lat,
            lng: this.props.picture.lng
          },
          name: this.props.name
        });
      }
    } else {
      if (this.state.name !== this.props.name) {
        this.setState({
          defaultCenter: {
            lat: this.props.tag.latStart,
            lng: this.props.tag.lngStart
          },
          name: this.props.name
        });
      }
    }
  };
  render() {
    return (
      <Fragment>
        {this.setupDefault()}
        <MapWithAMarker
          containerElement={<div style={{ height: `45vh` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          defaultCenter={this.state.defaultCenter}
          markers={this.props.markers}
        />
      </Fragment>
    );
  }
}
export default Map;

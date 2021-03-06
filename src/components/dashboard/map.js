import React, { Component, Fragment } from "react";

import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

// set a varaible for the google maps render
const MapWithAMarker = withGoogleMap(props => {
  return (
    // set up the GoogleMap and use the values off props
    <GoogleMap
      defaultZoom={props.zoom}
      center={{
        lat: props.defaultCenter.lat,

        lng: props.defaultCenter.lng
      }}
      defaultCenter={{
        lat: props.defaultCenter.lat,

        lng: props.defaultCenter.lng
      }}
    >
      {/* if our markers are passed in this will map over them
    and render a marker for each marker in the array */}
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
  // this is going to set up the default state
  // deprending on where this compoent is rendered from
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
        {/* this function is called when the component is rendered  */}
        {this.setupDefault()}

        {/* pass our values into the map to use as props */}
        <MapWithAMarker
          containerElement={
            <div style={{ height: `45vh`, marginTop: "1.5vh" }} />
          }
          mapElement={<div style={{ height: `100%` }} />}
          defaultCenter={this.state.defaultCenter}
          markers={this.props.markers}
          zoom={this.props.zoom}
        />
      </Fragment>
    );
  }
}
export default Map;

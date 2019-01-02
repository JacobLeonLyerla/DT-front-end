import React, { Component } from "react";
import {
    withGoogleMap,
    GoogleMap,
    Marker,
  } from "react-google-maps";
  
  const MapWithAMarker = withGoogleMap(props =>
   
    <GoogleMap
    
      defaultZoom={6}
      defaultCenter={{ lat: -34.397, lng: 150.644 }}
    >
      <Marker
        position={{ lat: -34.397, lng: 150.644 }}
      />
    </GoogleMap>
  );
  class Map extends Component{
    constructor(props) {
        super(props);
      this.state ={
          defaultCenter:{
              lat: 0,
              lng: 0,
          }
        }
      }
      componentDidMount(){
      this.setupDefault()
      }
      setupDefault=()=>{
          console.log(this.props)
              if(this.props.picture.lat){
             this.setState({ defaultCenter:{
                lat: this.props.picture.lat ,
                lng: this.props.picture.lng ,
            }}) 
          }
      }
  render(){
      console.log(this.state)
      return(
          
  <MapWithAMarker
    containerElement={<div style={{ height: `400px` }} />}
    mapElement={<div style={{ height: `100%` }} />}
    defaultCenter={this.state.defaultCenter}
  />)
  }
  }
  export default Map;
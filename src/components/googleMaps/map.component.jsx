import React, { useState,useEffect } from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";

const Map = ({ current }) => {
  const [currentMarker, setCurrentMarker] = useState(null);
  const [currentSecondaryMarker, setSecondaryMarker] = useState(null);
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);

 
 if(current&& !lat){
    setLat(current.lat)
    setLng(current.lng)
  }
  
  if(current.lat!== lat){
    console.log("triggered")
    setLat(current.lat)
    setLng(current.lng)
    if(currentMarker){
      setLat(currentMarker.lat)
      setLng(currentMarker.lng)
    }
  
  }
  

  return (
    <>
      {" "}
      {current ? (
        <GoogleMap
          center={{ lat: lat, lng: lng }}
          defaultZoom={6}

        >
          <Marker
            center={{ lat: lat, lng: lng }}
            position={{ lat: current.lat, lng: current.lng }}
            onClick={() => {
              {
                setCurrentMarker(current);
                setLat(current.lat);
                setLng(current.lng)
              }
            }}
          />
          {current.markers ? (
            <>
              {current.markers.map((mark) => (
                <Marker
                center={{ lat: mark.cords.lng, lng: mark.cords.lat }}
                  position={{ lat: mark.cords.lat, lng: mark.cords.lng }}
                  key={`${mark.cords.lat}${mark.cords.lng}`}
                  onClick={() => {
                    {setSecondaryMarker(mark);
                        setLat(mark.cords.lat);
                        setLng(mark.cords.lng)
                    }
                  }}
                />
              ))}
            </>
          ) : null}
          {currentMarker && (
            <InfoWindow
              position={{ lat: currentMarker.lat, lng: currentMarker.lng }}
              onCloseClick={() => {
                {setCurrentMarker(null);
                    setLat(currentMarker.lat);
                    setLng(currentMarker.lng)
                }
              }}
            >
              <div>{currentMarker.name}</div>
            </InfoWindow>
          )}
          {currentSecondaryMarker && (
            <InfoWindow
              position={{
                lat: currentSecondaryMarker.cords.lat,
                lng: currentSecondaryMarker.cords.lng,
              }}
              onCloseClick={() => {
                {setSecondaryMarker(null);
                    setLat(currentSecondaryMarker.cords.lat);
                    setLng(currentSecondaryMarker.cords.lng)
                }
              }}
            >
              <div>{currentSecondaryMarker.name}</div>
            </InfoWindow>
          )}
        </GoogleMap>
      ) : null}
    </>
  );
};

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function App({ current }) {
  return (
    <div style={{ height: "50vh", width: "100vw" }}>
      <WrappedMap
        current={current}
        googleMapURL={`it's not using this`}
        loadingElement={<div style={{ height: "100%" }}></div>}
        containerElement={<div style={{ height: "100%" }}></div>}
        mapElement={<div style={{ height: "100%" }}></div>}
      />
    </div>
  );
}

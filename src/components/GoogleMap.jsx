import React from "react";
import GoogleMapReact from 'google-map-react';
import '.././styles/Googlemap.css'
const AnyReactComponent = ({ text }) => <img src="../../assets/w-pin.png"/>;

export default function SimpleMap(){
  const defaultProps = {
    center: {
      lat: -34.61965,
      lng: -58.7246
    },
    zoom: 17
  };

  return (
    // Important! Always set the container height explicitly
    <div className="map-container">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={-34.61965}
          lng={-58.7246}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}
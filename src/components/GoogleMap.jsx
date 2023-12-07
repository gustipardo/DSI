import React from "react";
import GoogleMapReact from 'google-map-react';
import '.././styles/Googlemap.css';
const AnyReactComponent = ({ text }) => <img className="image" src="../../assets/w-pin.png" />;

export default function SimpleMap() {
  const defaultProps = {
    center: {
      lat: -34.61965,
      lng: -58.7246
    },
    zoom: 17
  };


  return (
    <div className="map-container pb-4">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBnTIjTl4hPpLD8H79yTAdLZQo9f-CfHmI" }}
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

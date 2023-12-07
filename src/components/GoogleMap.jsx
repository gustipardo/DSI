import React from "react";
import GoogleMapReact from 'google-map-react';
import '.././styles/Googlemap.css';
const AnyReactComponent = () => <img className="image" src="../../assets/w-pin.png" />;

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
      <a href="https://www.google.com.ar/maps/place/DSI+Constructora/@-34.6202341,-58.7269514,17z/data=!3m1!4b1!4m6!3m5!1s0x95bcbe3c98e55af5:0x86a176d86e15454b!8m2!3d-34.6202385!4d-58.7243765!16s%2Fg%2F11f4qrwkcz?entry=ttu">
        <AnyReactComponent
          lat={-34.61965}
          lng={-58.7246}
          text="My Marker"
        />
      </a>
      </GoogleMapReact>

    </div>
  );
}

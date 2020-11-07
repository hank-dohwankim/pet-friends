import React from 'react';
import GoogleMapReact from 'google-map-react';
import Pet from './../components/Pet';

const AnyReactComponent = ({ text }) => (
  <div>
    <span
      style={{
        height: '10px',
        width: '10px',
        backgroundColor: 'red',
        borderRadius: '50%',
        display: 'inline-block',
      }}
    ></span>
    <span style={{ marginTop: '0px' }}>{text}</span>
  </div>
);

export default function GoogleMap(props) {
  const defaultLocation = {
    center: {
      lat: 49.8951,
      lng: -97.1384,
    },
    zoom: 10,
  };

  const pets = props.pets.map((pet) => {
    return (
      <AnyReactComponent
        key={pet._id}
        lat={pet.location.latitude}
        lng={pet.location.longitude}
        text={pet.name}
      />
    );
  });
  console.log(pets);

  return (
    <div id="google-map" style={{ width: '100%', height: '400px' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
        defaultCenter={defaultLocation.center}
        defaultZoom={defaultLocation.zoom}
      >
        {pets}
      </GoogleMapReact>
    </div>
  );
}

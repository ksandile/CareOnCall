// MapComponent.jsx
import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { useGoogleMaps } from './GoogleMapsProvider'; // Adjust the import path as needed

const MapComponent = ({ center }) => {
  const { isLoaded } = useGoogleMaps();

  if (!isLoaded) return <div>Loading map...</div>;

  return (
    <GoogleMap
      mapContainerStyle={{ height: "400px", width: "800px" }}
      center={center}
      zoom={10}
    >
      {/* Add any map markers or other components here */}
    </GoogleMap>
  );
};

export default MapComponent;

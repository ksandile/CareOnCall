// MapComponent.js
import React from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';

const MapComponent = () => {
    const containerStyle = {
        width: '100%',
        height: '400px'
    };

    const center = {
        lat: -3.745,  // Replace with the desired latitude
        lng: -38.523  // Replace with the desired longitude
    };

    return (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
        >
            <Marker position={center} />
        </GoogleMap>
    );
};

export default MapComponent;

// GoogleMapsProvider.jsx
import React, { createContext, useContext } from 'react';
import { useJsApiLoader } from '@react-google-maps/api';

const GoogleMapsContext = createContext();

export const GoogleMapsProvider = ({ children }) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyBQivdVNxU7quHhW_ARw2VuXKmHVwXhNMk',
    libraries: ['places'] // Adjust if needed
  });

  return (
    <GoogleMapsContext.Provider value={{ isLoaded }}>
      {isLoaded ? children : <div>Loading...</div>}
    </GoogleMapsContext.Provider>
  );
};

export const useGoogleMaps = () => useContext(GoogleMapsContext);

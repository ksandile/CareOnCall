import { useEffect } from 'react';

const loadGoogleMapsScript = (callback) => {
    const existingScript = document.getElementById('googleMaps');

    if (!existingScript) {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBQivdVNxU7quHhW_ARw2VuXKmHVwXhNMk&callback=${callback}`;
        script.id = 'googleMaps';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);

        script.onload = () => {
            if (callback) {
                window[callback]();
            }
        };
    } else if (callback) {
        window[callback]();
    }
};

const YourComponent = () => {
    useEffect(() => {
        loadGoogleMapsScript('initMap');
    }, []);

    return <div id="map" style={{ height: '400px', width: '100%' }}></div>;
};

export default YourComponent;

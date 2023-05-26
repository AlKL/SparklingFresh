import '../styles/location.css'
import { useMemo } from 'react';
import { GoogleMap, useLoadScript, Marker, MarkerF } from '@react-google-maps/api';

const Map = () => {
    // console.log(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    });

    if (!isLoaded) return <div>loading...</div>

    return (
        <div>
            <Gmap />
        </div>
    )
}

function Gmap() {
    const center = useMemo(() => ({ lat: 43.704030, lng: -79.504400 }), []);

    return (
        <GoogleMap
            zoom={14}
            center={center}
            mapContainerClassName='mapContainer'
        >

            <MarkerF position={center} />

        </GoogleMap>
    );
}

export default Map;
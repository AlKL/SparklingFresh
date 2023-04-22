import '../styles/map.css'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

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
    return <GoogleMap zoom={10} center={{ lat: 44, lng: -80 }} mapContainerClassName='mapContainer'></GoogleMap>
}

export default Map;
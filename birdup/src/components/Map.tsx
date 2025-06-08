import { useState } from "react"
import GoogleMapReact from "google-map-react";

function ObservationMap() {
    // Default location is Madison, WI
    const [center, setCenter] = useState({lat: 43.074722, lng: 89.384167});

    // Ask browser for current location
    navigator.geolocation.getCurrentPosition( (position) => (
        setCenter( () => (
            {lat: position.coords.latitude, 
            lng: position.coords.longitude}))
    ));
    return (

        <GoogleMapReact
            bootstrapURLKeys={{ key: "" }}
            defaultCenter={center}
            defaultZoom={11}
        >

        </GoogleMapReact>
    )
};

export default ObservationMap;
import React from 'react'
import { useState } from "react"
import GoogleMapReact from "google-map-react"

const Madison = {lat: 43.074722, lng: 89.384167}

function ObservationMap(): React.ReactElement {
    // Default location is Madison, WI
    const [center, setCenter] = useState(Madison);

    // Ask browser for current location
    // This probably will end up refactoring somewhere else
    navigator.geolocation.getCurrentPosition( (position) => (
        setCenter( () => (
            {lat: position.coords.latitude, 
            lng: position.coords.longitude}))
    ));
    return (
        // TODO: Render bird observations in as pins in here
        <GoogleMapReact
            bootstrapURLKeys={{ key: "" }}
            defaultCenter={center}
            defaultZoom={11}
        >
            
        </GoogleMapReact>

    )
};

export default ObservationMap
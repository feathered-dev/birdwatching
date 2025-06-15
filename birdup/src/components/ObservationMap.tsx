import GoogleMapReact from "google-map-react"

type LocationProps = {
    defaultLat: number
    defaultLng: number
}

function ObservationMap(props: LocationProps) : React.ReactElement {
    const defaultCenter = {
        lat: props.defaultLat,
        lng: props.defaultLng
    }
    
    return (
        // TODO: Render bird observations in as pins in here
        <GoogleMapReact
            bootstrapURLKeys={{ key: "" }}
            defaultCenter={defaultCenter}
            defaultZoom={11}
        >
            
        </GoogleMapReact>

    )
};

export default ObservationMap
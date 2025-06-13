import Stack from "react-bootstrap/Stack"
import type { Bird } from "../types/Bird"
import BirdCard from "./BirdCard"

type NearbyBirdsProps = {
    birds: Bird[]
}

// renders a scrollable list with nearby birds
// later: pass in query params instead
function NearbyBirds(props : NearbyBirdsProps) {
    const birds = props.birds
    let key = 0

    // Query database for birds near area
    const getNearbyBirds = () => {
        // fill in with real axios call later
        
    }
    
    return (
        <Stack >
            {birds.map( bird => <BirdCard bird={bird} key={key++}/>)}
        </Stack>
    )
}

export default NearbyBirds
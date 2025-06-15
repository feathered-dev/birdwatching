import ObservationMap from './components/ObservationMap'
import ParamForm from './components/ParamForm'
import Container from 'react-bootstrap/Container'
import NearbyBirds from './components/NearbyBirds'
import { useState } from 'react'
import type { Bird } from './types/Bird'
import type { UserEnteredParams } from './types/UserEnteredParams'

const exampleBird : Bird = {
  species : 'Common Grackle',
  sex: 'male',
  hasSeen: false,
  imgSource: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Common_grackle_in_PP_%2836732%29.jpg/1920px-Common_grackle_in_PP_%2836732%29.jpg',
  descSource: 'https://en.wikipedia.org/wiki/Common_grackle'
}

// Madison, WI
const defaultParams : UserEnteredParams = {
  lat: 43.074722,
  lng: 89.384167,
  rangeMiles: 15
}

function App() {
  const [userParams, setUserParams] = useState(defaultParams)

  // Starting layout
  // Ask browser for current location
  navigator.geolocation.getCurrentPosition( (position) => (
        setUserParams( () => ({
          lat: position.coords.latitude, 
          lng: position.coords.longitude,
          rangeMiles: defaultParams.rangeMiles
        })),
        () => {
          console.log("Failed to get location.")
        }
    ))

  return (
    <>
        {/* Top row used for user entered parameters */}
          <ParamForm params={userParams} setParams={setUserParams}/>
          <h1>User Params: {Object.entries(userParams)}</h1>
          <Container style={{height: '100vh', width: '100vw'}}>
            {/* Bottom Left is observation map */}
            <Container style={{height: '700px', width: '700px', float: 'left' }}>
              <ObservationMap defaultLat={userParams.lat} defaultLng={userParams.lng}/>
            </Container>
            {/* Bottom Right is bird checklist */}
            <Container style={{float: 'right'}}>
              <NearbyBirds birds={[exampleBird, exampleBird, exampleBird, exampleBird]}/>
            </Container>
          </Container>
    </>
  )  
}



export default App

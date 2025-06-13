import ObservationMap from './components/ObservationMap'
import ParamForm from './components/ParamForm'
import Container from 'react-bootstrap/Container'
import NearbyBirds from './components/NearbyBirds'
import { useState } from 'react'
import type { Bird } from './types/Bird'

const exampleBird : Bird = {
  species : 'Common Grackle',
  sex: 'male',
  hasSeen: false,
  soundSources: [''],
  imgSource: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Common_grackle_in_PP_%2836732%29.jpg/1920px-Common_grackle_in_PP_%2836732%29.jpg',
  descSource: 'https://en.wikipedia.org/wiki/Common_grackle'
}

function App() {
  const [userParams, setUserParams] = useState({lat: NaN, lng: NaN, range: NaN})

  // Starting layout
  
  // this is just POC, feel free to delete
  const [text, setText] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/")
      .then(response => {
        if (response.ok) {
          return response.text();
        }
        throw response;
      })
      .then(text => {
        setText(text);
      })
      .catch(error => {
        console.error("error with db: ", error);
      });
    }, 
    [setText]
  );

  return (
    <>
        {/* Top row used for user entered parameters */}
          <ParamForm/>
          <Container style={{height: '100vh', width: '100vw'}}>
            {/* Bottom Left is observation map */}
            <Container style={{height: '700px', width: '700px', float: 'left' }}>
              <ObservationMap />
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

import ObservationMap from './components/Map'
import ParamField from './components/ParamField'
import BirdList from './components/BirdList'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useEffect, useState } from 'react'

function App() {
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
      <Container fluid={true} >
        {/* Top row used for user entered parameters */}
        <Row>
            <ParamField />
        </Row>
        <p>From the DB: {text}</p>
        <Row>
          {/* Bottom Left is observation map */}
          <Col style={{}}>
            <ObservationMap />
          </Col>
          {/* Bottom Right is bird checklist */}
          <Col style={{height: '80vh', width: '25vw'}}>
            <BirdList />
          </Col>
          <Col style={{height: '80vh', width: '25vw'}}>
            <BirdList />
          </Col>
        </Row> 
      </Container>
  )  
}



export default App

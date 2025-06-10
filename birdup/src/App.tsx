import ObservationMap from './components/Map'
import ParamField from './components/ParamField'
import BirdList from './components/BirdList'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function App() {
  // Starting layout
  return (
      <Container fluid={true} >
        {/* Top row used for user entered parameters */}
        <Row>
            <ParamField />
        </Row>
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

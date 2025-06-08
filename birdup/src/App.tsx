import ObservationMap from './components/Map';
import ParamField from './components/ParamField';
import BirdList from './components/BirdList';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <div>
      <ParamField />

      <Container style={ {height: '100vh', width: '100%'}}>
          <ObservationMap />
      </Container>

      <BirdList />
      
    </div>
  )  
};

export default App

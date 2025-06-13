import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import type { Bird } from '../types/Bird'


type BirdProps = {
    bird: Bird
}

function BirdCard(props : BirdProps) {
    const bird = props.bird

    return(
        <>
        <Card style={{ width: '18rem', border: '1rem inset'}} border='dark'>
            <Card.Img variant={'top'} src={bird.imgSource} width={'150px'}/>
            <Card.Title>{bird.species}</Card.Title>
            <Card.Text>This will be replaced with a bird description!</Card.Text>
            <Button size={'sm'}>I've seen this! </Button>
        </Card>
        </>
    )
}


export default BirdCard
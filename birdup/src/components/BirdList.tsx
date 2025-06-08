import Stack from "react-bootstrap/Stack"
import Card from "react-bootstrap/Card"

function BirdList() {
    return (
        <Stack gap={3}>
            <Card>Bird One</Card>
            <Card>Bird Two</Card>
            <Card>Bird Three</Card>
            <Card>Bird Four</Card>
            <Card>Bird Five</Card>
        </Stack>
    )
}


export default BirdList
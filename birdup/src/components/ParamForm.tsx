import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import type { UserEnteredParams } from "../types/UserEnteredParams"

type FormParams = {
    params: UserEnteredParams
    setParams: React.Dispatch<React.SetStateAction<UserEnteredParams>>
}

function ParamForm(props : FormParams) {

    const params = props.params
    const setParams = props.setParams

    const handleClick = () => {
        // setParams here
    }

    return (
        <>
            <Form.Group controlId="lat">
                <Form.Label>Latitude</Form.Label>
                <Form.Control placeholder={params.lat.toString()}/>
            </Form.Group>
            <Form.Group controlId="lng">
                <Form.Label>Longitude</Form.Label>
                <Form.Control placeholder={params.lng.toString()}/>
            </Form.Group><Form.Group controlId="range">
                <Form.Label>Range</Form.Label>
                <Form.Control placeholder={params.rangeMiles.toString()}/>
            </Form.Group><Form.Group controlId="user">
                <Form.Label>User</Form.Label>
                <Form.Control placeholder={params.userID?.toString()}/>
            </Form.Group>
            <Button variant="secondary" onClick={handleClick}>Bird me up!</Button>
        </>
    )

}

export default ParamForm
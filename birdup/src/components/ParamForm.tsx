import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

function ParamForm() {

    return (
        <>
        <Form>
            <Form.Label></Form.Label>
            <Form.Control className="me-auto" placeholder="Latitude" />
            <Form.Control className="me-auto" placeholder="Longitude" />
            <Form.Control className="me-auto" placeholder="Range" />
            <Form.Control className="me-auto" placeholder="User" />
            <Button variant="secondary">Update</Button>
        </Form>
        </>
    )

}

export default ParamForm
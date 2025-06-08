import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

function ParamField() {

    return (
        <>
        <Form.Control className="me-auto" placeholder="Latitude" />
        <Form.Control className="me-auto" placeholder="Longitude" />
        <Form.Control className="me-auto" placeholder="User" />
        <Button variant="secondary">Update</Button>
        </>
    )

}

export default ParamField
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import trips from '../data/trips';
import guide from '../data/guide';

function NewTravel() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <div className='container'>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                        <Form.Label>Destinazione</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Destinazione"
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                        <Form.Label>Partenza</Form.Label>
                        <Form.Control
                            required
                            type="date"
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                        <Form.Label>Ritorno</Form.Label>
                        <Form.Control
                            required
                            type="date"
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                        <Form.Label>Accompagnatore</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option>Seleziona un collaboratore</option>
                            {guide.map((i, index) => (
                                <option key={index} value={i.id} >{i.collaboratore}</option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustom05">
                        <Form.Label>Compagnia Aerea</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option>Seleziona un collaboratore</option>
                            {trips.map((i, index) => (
                                <option key={index} value={i.id} >{i.compagnia_aerea}</option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                </Row>
                <Button type="submit">Submit form</Button>
            </Form>
        </div>
    );
}

export default NewTravel;
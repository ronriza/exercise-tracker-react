import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'


function EditPage({ exerciseToEdit, user }) {
    const history = useHistory();
    const [name, setName] = useState(exerciseToEdit.name);
    const [reps, setReps] = useState(exerciseToEdit.reps);
    const [sets, setSets] = useState(exerciseToEdit.sets);
    const weightInLbs = (exerciseToEdit.unit==="lbs") ? exerciseToEdit.weight : Math.round(exerciseToEdit.weight * 0.45359237)
    const [weight, setWeight] = useState(weightInLbs);
    const [unit, setUnit] = useState(exerciseToEdit.unit);
    const [date, setDate] = useState(`${String(exerciseToEdit.date.getUTCMonth()+1).padStart(2,'0')}-${String(exerciseToEdit.date.getUTCDate()).padStart(2,'0')}-${String(exerciseToEdit.date.getUTCFullYear()).slice(2)}`);

    // sends an http request to edit an exercise and redirects to home page
    const editExercise = async () => {
        const token = await user.getIdToken();
        const response = await fetch(`/exercises/${exerciseToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({ name: name, reps: reps, sets: sets, weight: weight, unit: unit, date: date }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        });
        if (response.status === 200) {
            alert("Successfully edited the exercise!");
        } else {
            const error = await response.json()
            alert(error.error);
        }
        history.push("/");
    };

    return (
        <>
            <Container className="mt-5">
                <Row className="justify-content-center">
                    <Col md={6} className="mb-5">
                        <Card className="shadow">
                            <Card.Body >
                                <Card.Title>Edit Exercise</Card.Title>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formExerciseName">
                                        <Form.Label>Exercise Name</Form.Label>
                                        <Form.Control type="text" value={name} onChange={({ target }) =>
                                            setName(target.value)} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formReps">
                                        <Form.Label>Number of Reps</Form.Label>
                                        <Form.Control type="number" value={reps} onChange={({ target }) =>
                                            setReps(target.value)} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formSets">
                                        <Form.Label>Number of Sets</Form.Label>
                                        <Form.Control type="number" value={sets} onChange={({ target }) =>
                                            setSets(target.value)} />
                                    </Form.Group>
                                    <Form.Group className="mb-1" controlId="formWeight">
                                        <Form.Label>Weight</Form.Label>
                                        <Form.Control type="number" value={weight} onChange={({ target }) =>
                                            setWeight(target.value)} />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Check inline checked={("lbs" === unit) ? true : false} label="lbs" name="unit" type="radio" id="lbs" onChange={() =>
                                            setUnit("lbs")} />
                                        <Form.Check inline checked={("kgs" === unit) ? true : false} label="kgs" name="unit" type="radio" id="kgs" onChange={() =>
                                            setUnit("kgs")} />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formDate">
                                        <Form.Label>Date</Form.Label>
                                        <Form.Control type="test" value={date} onChange={({ target }) =>
                                            setDate(target.value)} />
                                    </Form.Group>
                                    <Button variant="primary" onClick={editExercise}>
                                        Submit
                                    </Button>

                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default EditPage;
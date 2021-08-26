import React, { useState} from 'react';
import { useHistory } from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'



function CreatePage({ user }) {
    const history = useHistory();
    const [name, setName] = useState('');
    const [reps, setReps] = useState('');
    const [sets, setSets] = useState('');
    const [weight, setWeight] = useState('');
    const [unit, setUnit] = useState('lbs');
    const [date, setDate] = useState('');

    const addExercise = async () => {
        const newExercise = { name, reps, sets, weight, unit, date };
        const token = await user.getIdToken();
        const response = await fetch('/exercises', {
            method: 'POST',
            body: JSON.stringify(newExercise),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        });
        if (response.status === 201) {
            alert("Successfully added the exercise!");
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
                                <Card.Title>New Exercise</Card.Title>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formExerciseName">
                                        <Form.Label>Exercise Name</Form.Label>
                                        <Form.Control type="text" onChange={({ target }) =>
                                            setName(target.value)} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formReps">
                                        <Form.Label>Number of Reps</Form.Label>
                                        <Form.Control type="number" onChange={({ target }) =>
                                            setReps(target.value)} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formSets">
                                        <Form.Label>Number of Sets</Form.Label>
                                        <Form.Control type="number" onChange={({ target }) =>
                                            setSets(target.value)} />
                                    </Form.Group>
                                    <Form.Group className="mb-1" controlId="formWeight">
                                        <Form.Label>Weight</Form.Label>
                                        <Form.Control type="number" onChange={({ target }) =>
                                            setWeight(target.value)} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formUnit">
                                        <Form.Check inline checked={("lbs" === unit) ? true : false} label="lbs" name="unit" type="radio" id="lbs" onChange={() =>
                                            setUnit("lbs")} />
                                        <Form.Check inline checked={("kgs" === unit) ? true : false} label="kgs" name="unit" type="radio" id="kgs" onChange={() =>
                                            setUnit("kgs")} />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formDate">
                                        <Form.Label>Date</Form.Label>
                                        <Form.Control type="test" placeholder="MM-DD-YY" onChange={({ target }) =>
                                            setDate(target.value)} />
                                    </Form.Group>
                                    <Button variant="primary" onClick={addExercise}>
                                        Submit
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            {/* <fieldset>
                <legend>Add An Exercise</legend>
                <label htmlFor='name'>Name </label>
                <input type='text' id='name' value={name} onChange={e => setName(e.target.value)} />
                <br/>
                <label htmlFor='reps'># of Reps </label>
                <input type='number' id='reps' value={reps} onChange={e => setReps(e.target.value)} />
                <br/>
                <label htmlFor='sets'># of Sets </label>
                <input type='number' id='sets' value={sets} onChange={e => setSets(e.target.value)} />
                <br/>
                <label htmlFor='weight'>Weight </label>
                <input type='number' id='weight' value={weight} onChange={e => setWeight(e.target.value)} />
                <br/>
                <label htmlFor='unit'>Units </label>
                <input type='text' id='unit' value={unit} onChange={e => setUnit(e.target.value)} />
                <br/>
                <label htmlFor='date'>Date </label>
                <input type='text' id='date' value={date} placeholder='MM-DD-YY' onChange={e => setDate(e.target.value)} />

            </fieldset>
            <button onClick={addExercise}>Add</button> */}

        </>
    )
}

export default CreatePage;
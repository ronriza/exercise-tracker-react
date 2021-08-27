import React, { useState } from 'react';
import fire from '../fire.js'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Alert from 'react-bootstrap/Alert'


function LoginPage() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [failedLogin, setFailedLogin] = useState(false);
    const [failedSignUp, setFailedSignUp] = useState(false);

    // signs in a user through firebase
    const signIn = (e) => {
        e.preventDefault()
        fire.auth().signInWithEmailAndPassword(email, password)
            .catch((error) => {
                setFailedLogin(true)
            });
    }

    // signs in a user anonymously through firebase
    const anonymousSignin = (e) => {
        fire.auth().signInAnonymously()
            .catch((error) => {
                setFailedLogin(true)
            })
    }

    // signs up a suer through firebase
    const signUp = (e) => {
        e.preventDefault()
        fire.auth().createUserWithEmailAndPassword(email, password)
            .catch((error) => {
                setFailedSignUp(true)
            })
    }


    return (
        <div className="home pt-5">
            <Container>
                <Row className="justify-content-center">
                    <Col md className="mb-5">
                        <Card className="shadow">
                            <Card.Body >
                                {failedLogin && <Alert variant="danger">Log in Failed</Alert>}
                                <Card.Title>Log In</Card.Title>
                                <Form onSubmit={signIn}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" onChange={({ target }) =>
                                            setEmail(target.value)} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" onChange={({ target }) =>
                                            setPassword(target.value)} />
                                    </Form.Group>
                                    <Button variant="primary" type="submit">
                                        Log in
                                    </Button>
                                    <Button className="ms-3" variant="primary" onClick={anonymousSignin}>
                                        Log in Anonymously
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Card>


                    </Col>

                    <Col md className="mb-5">
                        <Card className="shadow">
                            <Card.Body>
                                {failedSignUp && <Alert variant="danger">Sign Up Failed</Alert>}
                                <Card.Title>Register</Card.Title>
                                <Form onSubmit={signUp}>
                                    <Form.Group className="mb-3" controlId="formRegisterEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" onChange={({ target }) =>
                                            setEmail(target.value)} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formRegisterPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" onChange={({ target }) =>
                                            setPassword(target.value)} />
                                    </Form.Group>
                                    <Button variant="primary" type="submit">
                                        Register
                                    </Button>
                                </Form>
                            </Card.Body>

                        </Card>

                    </Col>


                </Row>

            </Container>


        </div>
    )
}

export default LoginPage;
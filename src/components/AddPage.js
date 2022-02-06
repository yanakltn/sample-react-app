import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";


const AddPage = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const navigate = useNavigate();


    const handleOnSubmit = (event) => {
        event.preventDefault();
        const myData = JSON.parse(localStorage.getItem('myData') || '[]');
        myData.push({ firstName, lastName });
        localStorage.setItem('myData', JSON.stringify(myData));
        navigate('/');
    }

    const handleGoBack = (event) => {
        navigate('/');
    }

    const handleChangeFirst = (event) => {
        setFirstName(event.target.value);
    }

    const handleChangeLast = (event) => {
        setLastName(event.target.value);
    }

    return (
        <Container >
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>First Name:</Form.Label>
                    <Form.Control onChange={handleChangeFirst} type='text' value={firstName} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Last Name:</Form.Label>
                    <Form.Control onChange={handleChangeLast} type='text' value={lastName} />
                </Form.Group>

                <Button variant="primary" type="submit" onClick={handleOnSubmit}>
                    Submit
                </Button>

                <Button variant="info" onClick={handleGoBack}>
                    Main Page
                </Button>
            </Form>
        </Container>
    )
}

export default AddPage;
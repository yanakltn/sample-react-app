import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';



const AddUserModal = ({ onSave, show, onClose }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleSave = (event) => {
        onSave({ firstName, lastName });
        onClose();
    }

    const handleChangeFirst = (event) => {
        setFirstName(event.target.value);
    }

    const handleChangeLast = (event) => {
        setLastName(event.target.value);
    }

    return (
        <Modal show={show} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add User</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>First Name:</Form.Label>
                        <Form.Control onChange={handleChangeFirst} type='text' value={firstName} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Last Name:</Form.Label>
                        <Form.Control onChange={handleChangeLast} type='text' value={lastName} />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onClose} variant="secondary">
                    Close
                </Button>
                <Button onClick={handleSave} variant="primary">
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default AddUserModal;
import React, { useEffect, useState } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

const DataRow = ({ firstName, lastName, handleEdit, handleDelete }) => {
    return (
        <tr >
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td className="text-center"><Button variant="primary" onClick={handleEdit}>Edit</Button></td>
            <td className="text-center"><Button variant="danger" onClick={handleDelete}>Delete</Button></td>
        </tr>
    );
}

const DataTable = ({ myData, handleEdit, handleDelete }) => {
    const listItems = myData.map((item, index) =>
        <DataRow
            firstName={item.firstName}
            lastName={item.lastName}
            handleEdit={() => handleEdit(index)}
            handleDelete={() => handleDelete(index)} key={index} />
    );

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {listItems}
            </tbody>
        </Table>
    )
}

const MainPage = () => {
    const [users, setUsers] = useState(() => {
        const myData = JSON.parse(localStorage.getItem('myData') || '[]');
        return myData;
    });
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/add');
    }
    const handleEdit = (index) => {
        navigate('/edit/' + index);
    }

    const handleDelete = (index) => {
        const newUsers = users.filter((item, curIndex) => curIndex !== index);
        setUsers(newUsers);
    }

    useEffect(() => {
        localStorage.setItem('myData', JSON.stringify(users));
    }, [users]);

    return (
        <Container>
            <DataTable myData={users} handleEdit={handleEdit} handleDelete={handleDelete} />
            <Button variant="success" onClick={handleClick}>Add User</Button>
        </Container>)
}

export default MainPage;
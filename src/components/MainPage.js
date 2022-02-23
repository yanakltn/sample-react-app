import React, { useEffect, useState } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { createUser, updateUser, fetchUsers, deleteUserAsync } from '../app/usersSlice';
import AddUserModal from './AddPage';
import EditUserModal from './EditPage';

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
    const [showEdit, setShowEdit] = useState(false);
    const [showAdd, setShowAdd] = useState(false);
    const users = useSelector((state) => state.users.users)
    const dispatch = useDispatch()

    const [selectedUserIndex, setSelectedUserIndex] = useState(0);

    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    const handleOnSave = (user) => {
        dispatch(updateUser({userId: users[selectedUserIndex]._id, user}));
    }
    const handleDelete = (index) => {
        dispatch(deleteUserAsync(users[index]._id));
    }

    const handleCloseEditModal = () => setShowEdit(false);

    const handleCloseAddModal = () => setShowAdd(false);

    const handleOpenEditModal = (index) => {
        setSelectedUserIndex(index);
        setShowEdit(true);
    }
    const handleOpenAddModal = () => setShowAdd(true);

    const handleOnAdd = (user) => {
        dispatch(createUser(user));
    }

    return (
        <Container>
            <DataTable myData={users} handleEdit={handleOpenEditModal} handleDelete={handleDelete} />
            <Button variant="success" onClick={handleOpenAddModal}>Add User</Button>

            <EditUserModal show={showEdit} onClose={handleCloseEditModal} user={users[selectedUserIndex]} onSave={handleOnSave} />
            <AddUserModal show={showAdd} onClose={handleCloseAddModal} onSave={handleOnAdd} />
        </Container>)
}

export default MainPage;
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

const DataRow = ({ firstName, lastName, handleDelete }) => {
    return (
        <tr >
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td> <button onClick={handleDelete}>delete</button> </td>
        </tr>
    );
}

const DataTable = ({ myData, handleDelete }) => {
    const listItems = myData.map((item, index) =>
        <DataRow firstName={item.firstName} lastName={item.lastName} handleDelete={() => handleDelete(index)} key={index} />
    );

    return (
        <table>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                </tr>
            </thead>
            <tbody>
                {listItems}
            </tbody>
        </table>
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

    const handleDelete = (index) => {
        const newUsers = users.filter((item, curIndex) => curIndex !== index);
        setUsers(newUsers);
    }

    useEffect(() => {
        localStorage.setItem('myData', JSON.stringify(users));
    }, [users]);

    return (
        <div>
            <button onClick={handleClick}>Add User</button>
            <DataTable myData={users} handleDelete={handleDelete} />
        </div>)
}

export default MainPage;
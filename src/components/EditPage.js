import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";


const EditPage = () => {
    const { index } = useParams();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const myData = JSON.parse(localStorage.getItem('myData') || '[]');
        const item = myData[index];
        setFirstName(item.firstName);
        setLastName(item.lastName);
    }, []);

    const handleOnSubmit = (event) => {
        event.preventDefault();
        const myData = JSON.parse(localStorage.getItem('myData') || '[]');
        myData[index] = { firstName, lastName };
        localStorage.setItem('myData', JSON.stringify(myData));
        navigate('/');
    }

    const handleChangeFirst = (event) => {
        setFirstName(event.target.value);
    }

    const handleChangeLast = (event) => {
        setLastName(event.target.value);
    }

    return (
        <div>
            <div>
                <label>First Name:</label>
                <input onChange={handleChangeFirst} type='text' value={firstName} />
            </div>

            <div>
                <label>Last Name:</label>
                <input onChange={handleChangeLast} type='text' value={lastName} />
            </div>

            <button onClick={handleOnSubmit}>Submit</button>
        </div>
    )
}

export default EditPage;
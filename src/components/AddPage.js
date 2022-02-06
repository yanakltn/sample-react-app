import React, { useState } from 'react';
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

export default AddPage;
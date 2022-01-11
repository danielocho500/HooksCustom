import React, {useState} from 'react';
import './CounterApp.css';

export const CounterApp = () => {

    const [counter, setCounter] = useState({
        count1: 10,
        count2: 20
    });

    const {count1, count2} = counter;

    const handleButton = () => {
        setCounter({
            ...counter,
            count2: count2 +1
        });
    }

    return (
        <>
            <h1> count1: {count1}</h1>
            <h1> count2: {count2}</h1>
            <hr/>

            <button className='btn btn-primary' onClick={handleButton}>
                +1
            </button>
        </>
    )
}

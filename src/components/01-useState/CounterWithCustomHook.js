import React from 'react'
import { useCounter } from '../../hooks/useCounter';
import './CounterApp.css';

export const CounterWithCustomHook = () => {

    const {counter, increment, decrement,reset} = useCounter(12);

    return (
        <>
            <h1> Counter with hook {counter}</h1>
            <hr/>

            <button className='btn btn-primary' onClick={() => increment(1)}> +1 </button>
            <button className='btn' onClick={reset}> Reset </button>
            <button className="btn btn-secondary" onClick={() => decrement(2)}> -2 </button>
        </>
    )
}

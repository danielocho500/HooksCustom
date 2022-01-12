import React, { useMemo, useState } from 'react'
import { useCounter } from '../../hooks/useCounter'

export const MemoHook = () => {
    const {counter,increment} = useCounter(10);
    const [show, setShow] = useState(true);


    const procces = (iterations) => {
        for(let i =0; i< iterations; i++){
            console.log("ahhh");
        }

        return `${iterations} iteraciones realizadas`
    }

    const memoProcess = useMemo(() => procces(counter), [counter]);

    return (
        <div>
            <h1> MemoHook </h1>
            <h3> Counter: <small> {counter} </small>  </h3>
            <hr/>

            <p> {memoProcess} </p>

            <button 
                className='btn btn-primary'
                onClick={increment}
                >
                +1
            </button>

            <button
                className='btn btn-outline-primary ml-3'
                onClick={() => {
                    setShow(!show);
                }}
            >
                Show/hide {JSON.stringify(show)}
            </button>
        </div>
    )
}

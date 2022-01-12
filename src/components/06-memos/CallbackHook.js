import React, {useCallback, useState} from 'react'
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    const increment = useCallback( () => {
        setCounter(c => c + 1);
    },[setCounter],
    )

    return (
        <div>
            <h1>Use Callback Hook: {counter}</h1>
            <hr/>

            <ShowIncrement increment={increment}/>
        </div>
    )
}

import React, { useLayoutEffect, useRef, useState } from 'react'
import { useFetch } from '../../hooks/useFetch'
import './layout.css'

export const Layout = () => {

    const [{loading, data}, getRandom] = useFetch('https://www.breakingbadapi.com/api/quote/random')

    const {author,quote} = !!data && data[0];

    const pTag = useRef();
    const [boxSize, setBoxSize] = useState({})

    useLayoutEffect(() => {
        setBoxSize(pTag.current.getBoundingClientRect());
    }, [quote])

    return (
        <div>
            <h1>LayoutEffect </h1>
            <hr/>

            <blockquote className='blockquote text-right'>
                <p 
                    className='mb-0'
                    ref={pTag}
                > {quote} </p>
                <br/>
            </blockquote>
            

            {!loading && (
                <button className='btn btn-primary' onClick={getRandom}>
                    Get other Phrase
                </button>
            )}
            

            
        </div>
    )
}

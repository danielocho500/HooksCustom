import React from 'react'
import { useFetch } from '../../hooks/useFetch'

export const MultipleCustomHooks = () => {

    const [{loading, data}, getRandom] = useFetch('https://www.breakingbadapi.com/api/quote/random')

    const {author,quote} = !!data && data[0];

    return (
        <div>
            <h1>BreakingBad </h1>
            <hr/>

            {
                loading
                ?
                (
                    <div className='alert alert-info text-center'>
                        Loading...
                    </div>
                )
                :
                (
                    <blockquote className='blockquote text-right'>
                        <p className='mb-0'> {quote} </p>
                        <br/>
                        <footer className='blockquote-footer'> {author}</footer>
                     </blockquote>
                )
            }

            {!loading && (
                <button className='btn btn-primary' onClick={getRandom}>
                    Get other Phrase
                </button>
            )}
            

            
        </div>
    )
}

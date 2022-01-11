import React,{useRef} from 'react'

export const FocusScreen = () => {
    const inputRef = useRef()

    const handleClick = () => {
        inputRef.current.select();
    }

    return (
        <>
            <h1> Focus Screen </h1>

            <input
                type='text'
                placeholder='your name'
                className='form-control'
                ref={inputRef}
            />

            <button
                className='btn btn-primary mt-5'
                onClick={handleClick}
            >
                Focus
            </button>
        </>
    )
}

import React from 'react';
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({dispatch}) => {

    const [{description}, handleInputChange, reset] =  useForm({
        description: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if(description.trim().length <= 1)
            return;

        const newToDo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }
    
        const action = {
            type: 'add',
            payload: newToDo
        }

        dispatch(action);
        reset();
    }

    return (
        <>
            <form 
                className='form-group mb-5'
                onSubmit={handleSubmit}
                >
                <h3 className='text-center'> Add TODO </h3>
                
                <input
                    type='text'
                    name='description'
                    className='form-control mb-2'
                    placeholder='description...'
                    value={description}
                    onChange={handleInputChange}
                >
                </input>

                <button
                    type='submit'
                    className='btn btn-outline-primary btn-form'
                >
                    Add
                </button>



            </form>
        </>
    )
}

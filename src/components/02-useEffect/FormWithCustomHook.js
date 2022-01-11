import React, { useState } from 'react'
import { useForm } from '../../hooks/useForm';
import './effects.css'

export const FormWithCustomHook = () => {

    const [form, handleInputChange] = useForm({
        name: '',
        mail: '',
        password: ''
    });

    const {name,mail,password} = form;

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(form);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1> FormWithCustomHook </h1>   
            <hr/>

            <div className='form-group'>
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder='your name'
                    autoComplete='off'
                    value={name}
                    onChange={handleInputChange}
                />

            </div>
            
            <br/>

            <div className='form-group'>
                <input
                    type="text"
                    name="mail"
                    className="form-control"
                    placeholder='your mail'
                    autoComplete='off'
                    value={mail}
                    onChange={handleInputChange}
                />

            </div>

            <br/>
            
            <div className='form-group'>
                <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder='your mail'
                    autoComplete='****'
                    value={password}
                    onChange={handleInputChange}
                />

            </div>

            <br/>

            <button type='Submit' className='btn btn-primary'>
                Guardar
            </button>
        </form>
    )
}

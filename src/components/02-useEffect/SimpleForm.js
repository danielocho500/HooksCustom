import React, { useEffect, useState } from 'react'
import './effects.css'
import { Message } from './Message';

export const SimpleForm = () => {

    const [form, setForm] = useState({
        name: '',
        mail: ''
    });

    const {name,mail} = form;

    useEffect(() => {
        console.log('First time only');
    }, []);
    
    useEffect(() => {
        console.log('Form change');
    }, [form]);
    
    useEffect(() => {
        console.log('mail change');
    }, [mail]);

    const handleInputChange = ({target}) => {
        setForm({
            ...form,
            [target.name]: target.value
        })
    }

    return (
        <>
            <h1> useEffects </h1>   
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

            {(name === '123') && <Message/>}
        </>
    )
}

import React, { useEffect, useReducer } from 'react'
import './styles.css'
import { TodoAdd } from './TodoAdd'
import { TodoList } from './TodoList'
import { toDoReducer } from './todoReducer'


const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []; 
}

export const ToDoApp = () => {    

    const [toDos, dispatch] = useReducer(toDoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( toDos));

    }, [toDos])


    const handleDelete = (id) => {
    
        const action = {
            type: 'delete',
            payload: id
        }

        dispatch(action);
    }

    const handleToggle = (toDoId) => {
        const action = {
            type: 'toggle',
            payload: toDoId
        }

        dispatch(action);
    }

    return (
        <div className='container'>
            <h1> Todo App ({toDos.length}) </h1>
            <hr/>

            <div className='grid'>
                <TodoAdd dispatch={dispatch}/>

                <TodoList toDos={toDos} handleDelete={handleDelete} handleToggle={handleToggle}/>
            </div>
        </div>
    )
}

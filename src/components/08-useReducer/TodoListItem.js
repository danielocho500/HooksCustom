import React from 'react';
import PropTypes from 'prop-types';

export const TodoListItem = ({todo,i,handleToggle, handleDelete }) => {
    return (
        <li
            key={todo.id}
            className='list-group-item item'
        >
            <p className={`text-center toggle ${todo.done && 'complete'} `} onClick={() => { handleToggle(todo.id) }}> {i + 1} {todo.desc} </p>
            <button
                className='btn btn-danger'
                onClick={ (e) => {
                    e.preventDefault();
                    handleDelete(todo.id)
                }}
            > 
            Delete 
            </button>
        </li>
    )
}

TodoListItem.propTypes = {
    todo: PropTypes.object.isRequired,
    i: PropTypes.number.isRequired,
    handleToggle: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired
}



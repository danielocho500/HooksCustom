import React from 'react';
import PropTypes from 'prop-types';

import { TodoListItem } from './TodoListItem';

export const TodoList = ({toDos, handleToggle, handleDelete}) => {
    return (
        <ul className='list-group ist-group-flush'>
                    {
                        toDos.map((todo, i) =>  (
                            <TodoListItem key={todo.id} todo={todo} i={i} handleDelete={handleDelete} handleToggle={handleToggle}/>
                        ))
                    }
                </ul>
    )
}

TodoList.propTypes = {
    toDos: PropTypes.array.isRequired,
    handleToggle: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired
}

import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

const TodoList = ({todos,toggleTodo})=>{ 
    return (
    <ul>

        {todos.map(todo=>(
            <Todo key={todo.text}  onClick= {()=>toggleTodo(todo.id)} {...todo}/>
        ))}
    </ul>
)}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired
        }).isRequired
    ).isRequired,
    toggleTodo: PropTypes.func.isRequired
}

export default TodoList
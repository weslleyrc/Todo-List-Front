import React, {useState, useEffect, useRef } from 'react';
import TodoForm from './TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'

function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    const submitUpdate = value => {
        updateTodo(edit.id, value)
        setEdit({
            id: null,
            value:''
        })
    }

    if(edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />;
    }

    return todos.map((todo, index) => (
        <div className={todo.isComplete ? 'tarefa-completa' : 'tarefa'} key={index} >
             <div 
                key={todo.id} 
                onClick={() => completeTodo(todo.id)}>
                 {todo.text}
             </div>
             <div className="icones">
                 <RiCloseCircleLine 
                   onClick={() => removeTodo(todo.id)}
                   className='deletando-icone' 
                   />

                 <TiEdit
                   onClick={() => setEdit({id: todo.id, value: todo.text})}
                   className='editar-icone'
                 />
             </div>
        </div>
    ))
}

export default Todo;

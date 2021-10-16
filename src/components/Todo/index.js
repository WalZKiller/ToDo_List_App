import React, { useState } from 'react';

//Style & divs
import { Div1, Div2, RemoveIcon, EditIcon } from './Todo.styles';

//Images
import Remove from '../../images/remove-white.png';
import Edit from '../../images/edit-white.png';

//Components
import TaskListForm from '../TaskListForm';

const Todo = ({todos, completeTodo, removeTodo, updateTodo}) => {

    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    const submitUpdate = (value) => {
        updateTodo(edit.id, value);

        setEdit({
            id: null,
            value: '',
        })
    };

    if (edit.id) {
        return <TaskListForm onSubmit={submitUpdate} />
    };

    return todos.map((todo, index) => (
        
            <Div1 key={index}>
                <Div2 key={todo.id} onClick={() => completeTodo(todo.id)}>
                    {todo.text}
                </Div2>
                <RemoveIcon src={Remove} alt="remove-icon" onClick={() => removeTodo(todo.id)}/>
                <EditIcon src={Edit} alt="edit-icon" onClick={() => setEdit({id: todo.id, value: todo.text})} />
            </Div1>
    ));
};

export default Todo;
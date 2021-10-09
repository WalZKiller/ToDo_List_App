import React, { useState } from 'react';

//Style & divs
import { Div1, Div2, RemoveIcon, EditIcon } from './Todo.styles';

//Images
import Remove from '../../images/remove-white.png';
import Edit from '../../images/edit-white.png';

const Todo = ({todos, completeTodo, removeTodo}) => {

    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    return todos.map((todo, index) => (
        
            <Div1 key={index}>
                <Div2 key={todo.id} onClick={() => completeTodo(todo.id)}>
                    {todo.text}
                </Div2>
                <RemoveIcon src={Remove} alt="remove-icon" onClick={() => removeTodo(todo.id)}/>
                <EditIcon src={Edit} alt="edit-icon"/>
            </Div1>
    ));
};

export default Todo;
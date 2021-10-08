import React, { useState } from 'react';

//Style & divs
import { Div1, Div2 } from './Todo.styles';

const Todo = ({todos, completeTodo}) => {

    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    return todos.map((todo, index) => (
        
            <Div1 key={index}>
                <Div2 key={todo.id} onClick={() => completeTodo(todo.id)}>
                    {todo.text}
                </Div2>
            </Div1>
    ));
};

export default Todo;
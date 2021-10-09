import React, { useState } from 'react';

//Style
import { Wrapper, AddedTodo } from './TodoList.styles';

//Components
import TaskListForm from '../TaskListForm';
import Todo from '../Todo';

const ToDoList = () => {

    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return
        };

        const newTodo = [todo, ...todos];

        setTodos(newTodo);
        console.log(todo, ...todos);
    };

    const removeTodo = (id) => {
        const removeArr = [...todos].filter(todo => todo.id !== id)

        setTodos(removeArr)
    };
    
    const completeTodo = (id) => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        })
        setTodos(updatedTodos);
    };

    return (
        <>
            <Wrapper>
                <TaskListForm onSubmit={addTodo}/>
            </Wrapper>
            <AddedTodo>
                    <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo}/>
            </AddedTodo>
        </>
    )
};

export default ToDoList;
import React, { useState, useEffect } from 'react';

//Style
import { Wrapper, TaskListHeader, TaskListContent, IndividualTask  } from './TaskListCard.styles';

//Components
import ToDoList from '../ToDoList';

//Hook

const TaskListCard = () => {

    const [todolist, setTodolist] = useState([]);

    return (
    <>
        <Wrapper>
            <TaskListHeader>My Tasks for Today:</TaskListHeader>
            <TaskListContent>
                <ToDoList />
            </TaskListContent>
        </Wrapper>
    </>
    );
};

export default TaskListCard;
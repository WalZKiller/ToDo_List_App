import React, { useState, useEffect } from 'react';

//Style
import { Wrapper, TaskListHeader, TaskListContent, IndividualTask  } from './TaskListCard.styles';

//Components
import TaskListForm from '../TaskListForm';

//Hook

const TaskListCard = () => {

    const [todolist, setTodolist] = useState([]);

    return (
    <>
        <Wrapper>
            <TaskListHeader>What's The Plan For Today?</TaskListHeader>
            <TaskListContent>
                <TaskListForm />
            </TaskListContent>
        </Wrapper>
    </>
    );
};

export default TaskListCard;
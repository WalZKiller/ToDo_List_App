import React, { useState, useEffect } from 'react';

//Style
import { Wrapper, TaskListHeader, TaskListContent, IndividualTask  } from './TaskListCard.styles';

//Components
import TaskListForm from '../TaskListForm';
import AddedTaskList from '../AddedTaskList';

//Hook
import { useTaskListFetch } from '../../hooks/useTaskListFetch';

const TaskListCard = () => {

    const { addNewTaskList, setAddNewTaskList } = useTaskListFetch();
    const [state, setState] = useState(1);

    return (
    <>
        <Wrapper>
            <TaskListHeader>My List:</TaskListHeader>
            <TaskListContent>
                {state > addNewTaskList && <AddedTaskList text="New task 2"/>}
                <TaskListForm />
            </TaskListContent>
        </Wrapper>
    </>
    );
};

export default TaskListCard;
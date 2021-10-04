import React, { useState, useEffect } from 'react';

//Style
import { Wrapper, TaskListHeader, TaskListContent, IndividualTask  } from './TaskListCard.styles';

//Components
import TaskListForm from '../TaskListForm';
import AddedTaskList from '../AddedTaskList';

//Hook

const TaskListCard = () => {

    return (
    <>
        <Wrapper>
            <TaskListHeader>My List:</TaskListHeader>
            <TaskListContent>
                <TaskListForm />
            </TaskListContent>
        </Wrapper>
    </>
    );
};

export default TaskListCard;
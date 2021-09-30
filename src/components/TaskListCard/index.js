import React, { useState, useEffect } from 'react';

//Style
import { Wrapper, TaskListHeader, TaskListContent, IndividualTask  } from './TaskListCard.styles';

//Components
import TaskListForm from '../TaskListForm';
import Button from '../Button';

const TaskListCard = () => {

    const [text, setText] = useState('');

    function save() {
        localStorage.setItem("idtasklist", '')
    };

    function get() {
        let x = localStorage.getItem("idtasklist")
        console.log(x);
    };

    return (
    <>
        <Wrapper>
            <TaskListHeader>My List:</TaskListHeader>
            <TaskListContent>
                <IndividualTask>
                   <TaskListForm />
                </IndividualTask>
            </TaskListContent>
        </Wrapper>
    </>
    );
};

export default TaskListCard;
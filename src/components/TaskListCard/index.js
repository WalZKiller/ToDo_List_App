import React, { useState, useEffect } from 'react';

//Style
import { Wrapper, TaskListHeader, TaskListContent, IndividualTask  } from './TaskListCard.styles';

//Components
import Button from '../Button';
import InputText from '../InputText';

const TaskListCard = () => {

    const [text, setText] = useState('');

    function save() {
        localStorage.setItem("idtasklist", text)
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
                    <Button 
                    text="+"
                    callback={save}
                    />
                    <InputText />
                    <Button 
                    text="Get"
                    callback={get}
                    />
                </IndividualTask>
            </TaskListContent>
        </Wrapper>
    </>
    );
};

export default TaskListCard;
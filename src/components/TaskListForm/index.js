import React, { useEffect, useState } from 'react';

//Styles
import { Wrapper, Button, InputField } from './TaskListForm.styles';

//Hook
import { useTaskListFetch } from '../../hooks/useTaskListFetch';

const TaskListForm = () => {

    const { state, setState, setAddNewTaskList } = useTaskListFetch();

    function save() {
        localStorage.setItem("idtasklist", state)
    };

    function get() {
        let x = localStorage.getItem("idtasklist")
        console.log(x);
    };

    useEffect(() => {
         
    })

    return (
        <>
            <Wrapper>
                <Button type='button' onClick={save}>+</Button>
                <InputField 
                    type="text"
                    placeholder="New list name" 
                    value = {state} 
                    onChange={e => setState(e.target.value)}
                />
                <Button type='button' onClick={get}>ambik</Button>
            </Wrapper>
        </>
    );
};

export default TaskListForm;

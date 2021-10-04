import React, { useEffect, useState } from 'react';

//Styles
import { Wrapper, Content, Button, InputField } from './TaskListForm.styles';

//Hook
import { useTaskListFetch } from '../../hooks/useTaskListFetch';

//Components
import AddedTaskList from '../AddedTaskList';

const TaskListForm = () => {

    const { state, setState, addNewTaskList, setAddNewTaskList } = useTaskListFetch();

    /*const initialAddNewTaskList = {
        text = ""
    }*/

    function save() {
        localStorage.setItem("idtasklist", state)
        setAddNewTaskList(true)
    };

    function get() {
        let x = localStorage.getItem("idtasklist")
        console.log(x);
    };

    /*function saveAndRender() {
        localStorage.setItem("idtasklist", state)
    };*/

    return (
        <>
            <Wrapper>
                {addNewTaskList && <AddedTaskList text={state} />}
                <Content>
                    <Button type='button' onClick={save}>+</Button>
                    <InputField 
                        type="text"
                        placeholder="New list name" 
                        value = {state} 
                        onChange={e => setState(e.target.value)}
                    />
                    <Button type='button' onClick={get}>ambik</Button>
                </Content>
            </Wrapper>
        </>
    );
};

export default TaskListForm;

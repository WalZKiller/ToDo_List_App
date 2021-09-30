import React, { useState } from 'react';

//Styles
import { Button, InputField } from './TaskListForm.styles';

const TaskListForm = () => {

    const [state, setState] = useState('');

    function save() {
        localStorage.setItem("idtasklist", state)
    };

    function get() {
        let x = localStorage.getItem("idtasklist")
        console.log(x);
    };

    return (
        <>
            <Button type='button' onClick={save}>+</Button>
            <InputField 
                type="text"
                placeholder="New list name" 
                value = {state} 
                onChange={e => setState(e.target.value)}
            />
            <Button type='button' onClick={get}>ambik</Button>
        </>
    );
};

export default TaskListForm;

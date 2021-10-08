import React, { useEffect, useState } from 'react';

//Styles
import { Wrapper, Content, Button, Form, InputField } from './TaskListForm.styles';

//Hook
import { useTaskListFetch } from '../../hooks/useTaskListFetch';

const TaskListForm = ({onSubmit}) => {

    /*const { state, setState, addNewTaskList, setAddNewTaskList } = useTaskListFetch();*/
    const [input, setInput] = useState('');

    /*function save() {
        localStorage.setItem("idtasklist", state)
        setAddNewTaskList(true)
    };

    function get() {
        let x = localStorage.getItem("idtasklist")
        console.log(x);
    };*/

    const handleChange = (e) => {
        setInput(e.target.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input,
        });

        setInput('');
    };

    return (
        <>
            <Wrapper>
                <Content>
                    <Form onSubmit={handleSubmit}>
                        <Button>Add todo</Button>
                        <InputField 
                            type="text"
                            placeholder="New list name" 
                            value = {input} 
                            onChange={handleChange}
                            
                        />
                    </Form>
                </Content>
            </Wrapper>
        </>
    );
};

export default TaskListForm;

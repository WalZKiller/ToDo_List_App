import { useState } from 'react';


export const useTaskListFetch = () => {

    const [state, setState] = useState('');
    const [addNewTaskList, setAddNewTaskList] = useState(false);
    const [taskItems, setTaskItems] = useState([]);

    return { state, setState, addNewTaskList, setAddNewTaskList };
};
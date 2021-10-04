import { useState } from 'react';


export const useTaskListFetch = () => {

    const [state, setState] = useState('');
    const [addNewTaskList, setAddNewTaskList] = useState(false);

    return { state, setState, addNewTaskList, setAddNewTaskList };
};
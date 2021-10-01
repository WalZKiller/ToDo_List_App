import { useState, useEffect } from 'react';

export const useTaskListFetch = () => {
    const [state, setState] = useState('');
    const [addNewTaskList, setAddNewTaskList] = useState(0);

    return { state, setState, addNewTaskList, setAddNewTaskList };
};
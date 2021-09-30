import React from 'react';

//Styles
import { Wrapper, CardWhiteHeader, CardWhiteContent, IndividualTask } from './TaskCardWhite.styles';

const TaskCardWhite = () => (

    <Wrapper>
        <CardWhiteHeader>Task name</CardWhiteHeader>
        <CardWhiteContent>
            <IndividualTask>

            </IndividualTask>
        </CardWhiteContent>
    </Wrapper>
);

export default TaskCardWhite;
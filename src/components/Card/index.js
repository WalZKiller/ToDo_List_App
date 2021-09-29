import React from 'react';

//Style
import { Wrapper, TaskList, TaskListHeader, TaskListContent, IndividualTask, TaskCard, PlusButton, Input } from './Card.styles';

const Card = () => (

    <Wrapper>
        <TaskList>
            <TaskListHeader>My List:</TaskListHeader>
            <TaskListContent>
                <IndividualTask>
                    <PlusButton>+</PlusButton>
                    <Input placeholder="New list name"></Input>
                </IndividualTask>
            </TaskListContent>

        </TaskList>
        <TaskCard />
    </Wrapper>
);

export default Card;
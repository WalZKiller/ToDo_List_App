import React from 'react';

//Style
import { Wrapper } from './Card.styles';
import TaskListCard from '../TaskListCard';
import TaskCardWhite from '../TaskCardWhite';


const Card = () => (

    <Wrapper>
        <TaskListCard />
        <TaskCardWhite />
    </Wrapper>
);

export default Card;
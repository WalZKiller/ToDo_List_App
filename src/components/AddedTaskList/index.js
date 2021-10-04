import React from 'react';

//Style
import { Wrapper, PointSymbol, NewTaskText } from './AddedTaskList.styles';

const AddedTaskList = ({ text, render }) => {

    return (
        <>
            <Wrapper>
                <PointSymbol>•</PointSymbol>
                <NewTaskText>{text}</NewTaskText>
            </Wrapper>
        </>
    )
};

export default AddedTaskList;
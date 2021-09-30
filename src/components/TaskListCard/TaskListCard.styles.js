import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 30vw;
    height: 30vw;
    max-height: auto;
    border-radius: 20px;
    padding: 20px;
    margin-right: 20px;
`;

export const TaskListHeader = styled.div`
    color: white;
    font-size: 2rem;
    font-family: 'Quicksand';
    font-weight: 600;
    margin-top: 0.5rem;
    margin-bottom: 2rem;
`;

export const TaskListContent = styled.div`
    display: flex;
    flex-direction: column;
`;

export const IndividualTask = styled.div`
    display: flex;
    flex-direction: row;
`;
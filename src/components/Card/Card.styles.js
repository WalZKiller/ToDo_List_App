import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;   
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const TaskList = styled.div`
    width: 30vw;
    height: 30vw;
    max-height: auto;
    border-radius: 20px;
    padding: 20px;
    margin-right: 20px;
`;

export const TaskListHeader = styled.div`
    color: white;
    font-size: 3rem;
    font-family: 'Quicksand';
    font-weight: 600;
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

export const Input = styled.input`
    background: none;
    border: none;
    border-bottom: 2px solid white;
    font-family: 'Quicksand';
    font-weight: 500;
    font-size: 1rem;
    color: white;
    width: 20vw;
    padding: 0 8px;
`;

export const PlusButton = styled.button`
    background: none;
    border: none;
    color: white;
    font-size: 2rem;
    margin-right: 10px;
    transition: 0.5s;
    cursor: pointer;

    :hover {
        color: rgba(255, 255, 255, 0.7);
    }
`;

export const TaskCard = styled.div`
    background: rgba(255, 255, 255, 1);
    width: 40vw;
    height: 30vw;
    max-height: auto;
    border-radius: 20px;
    filter: drop-shadow(0px 10px 10px rgba(0, 0, 0, 0.2));
    padding: 20px;
    margin-left: 20px;
`;


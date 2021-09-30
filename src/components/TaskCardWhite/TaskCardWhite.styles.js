import styled from "styled-components";

export const Wrapper = styled.div`
    background: rgba(255, 255, 255, 1);
    width: 40vw;
    height: 30vw;
    max-height: auto;
    border-radius: 20px;
    padding: 20px;
    margin-left: 20px;
`;

export const CardWhiteHeader = styled.div`
    color: black;
    font-size: 2rem;
    font-family: 'Quicksand';
    font-weight: 600;
    margin-top: 0.5rem;
    margin-bottom: 2rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;

`;

export const CardWhiteContent = styled.div`
    display: flex;
    flex-direction: column;
`;

export const IndividualTask = styled.div`
    display: flex;
    flex-direction: row;
`;
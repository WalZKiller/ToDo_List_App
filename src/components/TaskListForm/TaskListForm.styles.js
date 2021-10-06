import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Button = styled.button`
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

export const Form = styled.form`
    margin: 0;
    padding: 0;
`;

export const InputField = styled.input`
    background: none;
    border: none;
    border-bottom: 2px solid white;
    font-family: 'Quicksand';
    font-weight: 500;
    font-size: 1rem;
    color: white;
    width: 20vw;
    padding: 0 8px;

    ::placeholder {
        color: rgba(255, 255, 255, 0.5);
    }
`;
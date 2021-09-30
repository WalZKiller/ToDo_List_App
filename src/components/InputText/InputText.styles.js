import styled from "styled-components";

export const Wrapper = styled.input`
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
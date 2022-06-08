import styled from 'styled-components';

const StyledContainer = styled.div`
    justify-content: center;
    display: flex;
    background-color:#e6edf2;
    width: 100%;
    height: 100%;
    padding-top: 5vh;
    padding-bottom: 3vh;
`;

const Card = styled.div`
    align-items: center;
    text-align: left;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 60vw;
    background-color: white;
`;

export{ StyledContainer, Card};
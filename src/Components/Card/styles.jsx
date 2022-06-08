import styled from 'styled-components';

const StyledContainer = styled.div`
    justify-content: center;
    display: flex;
    background-color:#e6edf2;
    width: 100%;
    height: 100%;
    padding-top: 0.5vh;
    padding-bottom: 0.5vh;

    @media(min-width: 768px){
        width: 100vw;
        padding-top: 1vh;
        padding-bottom: 1vh;   
    }
`;

const Card = styled.div`
    align-items: center;
    text-align: left;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100vw;
    background-color: white;

    @media(min-width: 768px){
        padding-left: 6.5vw;
    }

    @media(min-width: 1024px){
        width: 80vw;    
        padding-left: 6.5vw;
    }

    @media(min-width: 1440px){
        width: 70vw;    
        padding-left: 9vw;
    }
`;

export{ StyledContainer, Card};
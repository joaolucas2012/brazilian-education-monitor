import styled from 'styled-components';

const StyledContainer = styled.div`
    text-align: left;
    align-items: left;
    display: flex;
    flex-direction: column;
    width: 85%;
    margin: 15px 15px;
`;

const StyledLabel = styled.label`
    text-align: center;
    width: 100%;
    font-size: 0.9em;
    font-family: sans-serif;

    @media(min-width: 768px){
        text-align: justify;
        width: 90%;  
    }

    @media(min-width: 1024px){
        text-align: left;
        width: 90%;  
    }

    @media(min-width: 1440px){
        text-align: left;
        width: 80%;   
    }
`;  

const StyledSelect = styled.select`
    width: 95%;
    height: 35px;
    
    @media(min-width: 1024px){
        width: 90%;
    }

    @media(min-width: 1440px){
        width: 80%;   
    }
`;

export { StyledContainer, StyledLabel, StyledSelect };
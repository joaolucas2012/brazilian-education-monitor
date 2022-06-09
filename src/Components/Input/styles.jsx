import styled from 'styled-components';


const StyledContainer = styled.div`
    text-align: left;
    align-items: left;
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 15px 15px;
`;

const StyledLabel = styled.label`
    text-align: center;
    width: 100%;
    font-size: 17px;
    font-family: sans-serif;
    color: #6a6a6a;

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

    @media(min-width: 2560px){
        font-size: 25px;
        text-align: left;
        line-height: 40px;
        width: 90%;
    }
`;
    
const StyledInput = styled.input`
    width: 100%;
    height: 40px;
    border-width: 1px solid #d6d6d6;
    border-radius: none;

    ::placeholder,
    ::-webkit-input-placeholder {
        padding: 10px;
        font-size: 15px;
        font-family: sans-serif;
    }
    :-ms-input-placeholder {
        padding: 10px;
        font-size: 15px;
        font-family: sans-serif;
    }

    @media(min-width: 1024px){
        width: 90%;
    }

    @media(min-width: 1440px){
        width: 80%;   
    }

    @media(min-width: 2560px){
        height: 70px;
        width: 90%;
    }
`;

export{ StyledContainer, StyledLabel, StyledInput};
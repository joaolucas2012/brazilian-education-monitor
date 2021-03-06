import styled from 'styled-components';

const Form = styled.form`
    width: 100%;
    margin-right: 30px;
    align-items: left;
`;

const Header = styled.div`
    width: 100%;
    margin: 30px;
    font-family: sans-serif;
    color: #6e6e6e;
`;

const Title = styled.h2`
    width: 85%;
    margin-top: 12px;
    color: #07508e;
    font-size: 20px;
    font-family: Helvetica;
    font-weight: normal;
    line-height: 30px;

    @media(min-width: 2560px){
        font-size: 32px;
        line-height: 70px;
    }
`;

const P = styled.p`
    width: 100%;
    margin-top: 12px;
    text-align: justify;
    font-size: 15px;
    font-family: sans-serif;

    @media(min-width: 768px){
        width: 100%;
    }

    @media(min-width: 2560px){
        font-size: 30px;
    }
`;

const RedP = styled.p`
    color: red;
    width: 100%;
    text-align: justify;
    font-size: 15px;
    font-family: sans-serif;
    margin-top: 30px;
`;

const GreenP = styled.p`
    color: green;
    width: 100%;
    text-align: justify;
    font-size: 15px;
    font-family: sans-serif;
    margin-left: 15px;
`;

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
        text-align: left;
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

const StyledSelect = styled.select`
    width: 100%;
    height: 40px;
    border-width: 1px solid #d6d6d6;
    border-radius: none;
    color: #6e6e6e;

    @media(min-width: 1024px) and (max-width: 1440px){
        width: 50%;
    }

    @media(min-width: 2560px){
        height: 70px;
        width: 90%;
    }
`;

export { Form, Header, Title, P, RedP, GreenP, StyledContainer, StyledLabel, StyledSelect };

import styled from 'styled-components';

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

export { Header, Title, P };
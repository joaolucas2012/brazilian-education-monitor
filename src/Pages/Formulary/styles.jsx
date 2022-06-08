import styled from 'styled-components';

const Header = styled.div`
    width: 90%;
    margin: 30px;
    font-family: sans-serif;
    padding-left: 2vw;
`;

const Title = styled.h2`
    width: 85%;
    margin-top: 12px;
    color: #07508e;
    font-size: 16px;
    font-family: sans-serif;
    line-height: 30px;
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
`;

export { Header, Title, P };
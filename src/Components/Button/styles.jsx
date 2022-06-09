import styled from 'styled-components';

const ButtonContainer = styled.div`
    display: flex;
    align-items: left;
    width: 100%;
`;

const StyledButton = styled.button`
    margin: 10px 0;
    border: none;
    background-color: #07508e;
    color: white;
    width: 100%;
    height: 40px;

    &:hover{
        background-color: #05447c;
        cursor: pointer;
    }

    @media(min-width: 768px){
        width: 30%;
    }
`;

export{ButtonContainer, StyledButton};
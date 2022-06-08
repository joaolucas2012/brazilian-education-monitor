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
    text-align: left;
    width: 100%;
`;  

const StyledSelect = styled.select`
    width: 80%;
    height: 35px;
`;

export { StyledContainer, StyledLabel, StyledSelect };
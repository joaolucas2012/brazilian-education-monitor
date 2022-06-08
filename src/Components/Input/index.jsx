import React from "react";

import{ StyledContainer, StyledLabel, StyledInput } from './styles';

const Input = ({text}) =>{
    return(
        <StyledContainer>
            <StyledLabel>{text}</StyledLabel><br/>
            <StyledInput
                placeholder="Insira sua resposta"
            /><br/>
        </StyledContainer>
    );
};

export default Input;
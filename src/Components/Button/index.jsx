import React from 'react';

import { ButtonContainer, StyledButton } from './styles';

const Button = ({title}) => {
    return ( 
        <ButtonContainer>
            <StyledButton>
                {title}
            </StyledButton>
        </ButtonContainer>
    );
};
 
export default Button;
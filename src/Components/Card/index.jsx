import React from 'react';
import{ StyledContainer, Card } from './styles';

const Container = (props) => {
    return(
        <StyledContainer>
            <Card>
                {props.children}
            </Card>
        </StyledContainer>
    );
};

export default Container;
import React from 'react';
import './styles.css';

const Container = (props) => {
    return(
        <div className="wrapper">
            <div className="container">
                {props.children}
            </div>
        </div>
    );
};

export default Container;
import React from 'react';

import './styles.css';

const Button = ({title}) => {
    return ( 
        <div className="btn-container">
            <button className="button">
                {title}
            </button>
        </div>
    );
};
 
export default Button;
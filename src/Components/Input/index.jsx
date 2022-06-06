import React from "react";

import './styles.css';

const Input = ({text}) =>{
    return(
        <div className="container">
            <label
                className="label"
            >{text}</label><br/>
            <input
                className="input" 
                placeholder="Insira sua resposta"
            /><br/>
        </div>
    );
};

export default Input;
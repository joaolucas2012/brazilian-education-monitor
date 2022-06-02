import React from "react";

const Input = ({text}) =>{
    return(
        <div>
            <label>{text}</label><br/>
            <input placeholder="Digite"/><br/>
        </div>
    );
};

export default Input;
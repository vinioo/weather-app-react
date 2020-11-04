import React from 'react';

import './style.css'

const Button = ({ onClick, children }) => {
    return (
        <button onClick={onClick}>
            {children}
        </button>
    )
}

export default Button;

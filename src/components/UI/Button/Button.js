import React from 'react';
import './Button.css';

const Button = (props) => {
    const cls = [
        'button',
        props.type
    ];

    return (
        <button
            onClick={props.onClick}
            disabled={props.disabled}
            className={cls.join(' ')}
        >
            {props.children}
        </button>
    )
};

export default Button;
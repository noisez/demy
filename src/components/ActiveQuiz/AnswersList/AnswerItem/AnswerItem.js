import React from 'react';
import './AnswerItem.css';

const AnswerItem = props => {
    return (
        <li onClick={() => props.onAnswerClick(props.answer.id)} className='answer-item'>
            { props.answer.text }
        </li>
    )
};

export default AnswerItem;
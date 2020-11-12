import React from 'react';
import './AnswersList.css';
import AnswerItem from "./AnswerItem/AnswerItem";

const AnswersList = props => {
    return (
        <ul className='answers-list'>
            { props.answers.map((answer, index) => {
                return (
                    <AnswerItem onAnswerClick={props.onAnswerClick} key={index} answer={answer} />
                )
            }) }
        </ul>
    )
};

export default AnswersList;
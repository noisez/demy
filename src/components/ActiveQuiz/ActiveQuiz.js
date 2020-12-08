import React from 'react';
import './ActiveQuiz.css'
import AnswersList from "./AnswersList/AnswersList";

const ActiveQuiz = props => {
    return (
        <div className='active-quiz'>
            <p className='question'>
            <span>
                <strong>{props.answerNumber}.</strong>&nbsp;
                {props.question}
            </span>
                <small>{props.answerNumber} из {props.quizLenght}</small>
            </p>

            <AnswersList
                state={props.state}
                answers={props.answers}
                onAnswerClick={props.onAnswerClick}
            />
        </div>
    )
};

export default ActiveQuiz;
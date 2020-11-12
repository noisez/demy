import React, {Component} from 'react';
import './Quiz.css'
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";

class  Quiz extends Component {
    state = {
        activeQuestion: 0,
        quiz: [
            {
                question: 'Какого цвета небо?',
                rightAnswerId: 2,
                id: 1,
                answers: [
                    {text: 'Черный', id: 1},
                    {text: 'Синий', id: 2},
                    {text: 'Красный', id: 3},
                    {text: 'Зеленый', id: 4}
                ]
            },
            {
                question: 'Какого сейчас год?',
                rightAnswerId: 3,
                id: 2,
                answers: [
                    {text: '2018', id: 1},
                    {text: '2019', id: 2},
                    {text: '2020', id: 3},
                    {text: '2021', id: 4}
                ]
            }
        ]
    };

    onAnswerClickHandler = (answerId) => {
        console.log('Answer Id: ', answerId);
        console.log(this.state.activeQuestion);
        console.log(this.state.quiz.length);

        if (this.state.activeQuestion + 1 < this.state.quiz.length) {
            this.setState({
                activeQuestion: this.state.activeQuestion + 1
            })
        }
    };

    render() {
        return (
            <div className='quiz'>
                <div className='quiz-wrapper'>
                    <h1>Ответьте на вопросы</h1>
                    <ActiveQuiz
                        answers={this.state.quiz[this.state.activeQuestion].answers}
                        question={this.state.quiz[this.state.activeQuestion].question}
                        onAnswerClick={this.onAnswerClickHandler}
                        quizLenght={this.state.quiz.length}
                        answerNumber={this.state.activeQuestion + 1}
                    />
                </div>
            </div>
        );
    }
}

export default Quiz;
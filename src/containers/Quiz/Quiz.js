import React, {Component} from 'react';
import './Quiz.css'
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import FinishedQuiz from "../../components/FinishedQuiz/FinishedQuiz";

class  Quiz extends Component {
    state = {
        results: {}, //{ [id]: 'success' 'error' }
        isFinished: false,
        activeQuestion: 0,
        answerState: null, //{ [id]: 'success' 'error' }
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

        if (this.state.answerState) {
            const key = Object.keys(this.state.answerState)[0];
            if (this.state.answerState[key] === 'success') {
                return;
            }
        }

        const question = this.state.quiz[this.state.activeQuestion];
        const results = this.state.results;

        if (question.rightAnswerId === answerId) {

            if (!results[question.id]) {
                results[question.id] = 'success'
            }

            this.setState({
                answerState: {[answerId]: 'success'},
                results: results
            });

            const timeout = window.setTimeout(() => {
                if (this.isQuizFinished()) {
                    console.log('finished');
                    this.setState({
                        isFinished: true
                    });
                } else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1,
                        answerState: null
                    });
                }
                window.clearTimeout(timeout);
            }, 1000);

        } else {
            results[question.id] = 'error';
            this.setState({
                answerState: {[answerId]: 'error'},
                results: results
            });
        }

        // if (this.state.activeQuestion + 1 < this.state.quiz.length) {
        //     this.setState({
        //         activeQuestion: this.state.activeQuestion + 1
        //     })
        // }
    };

    isQuizFinished() {
        return this.state.activeQuestion + 1 === this.state.quiz.length;
    };

    retryHandler = () => {
        this.setState({
            results: {},
            isFinished: false,
            activeQuestion: 0,
            answerState: null
        });
    };

    componentDidMount() {
        console.log('Quiz ID = ', this.props.match.params.id);
        console.log(this.props);
    }

    render() {
        return (
            <div className='quiz'>
                <div className='quiz-wrapper'>
                    <h1>Ответьте на вопросы</h1>

                    {
                        this.state.isFinished ? <FinishedQuiz
                            results={this.state.results}
                            quiz={this.state.quiz}
                            onRetry={this.retryHandler}
                            />
                            : <ActiveQuiz
                                answers={this.state.quiz[this.state.activeQuestion].answers}
                                question={this.state.quiz[this.state.activeQuestion].question}
                                onAnswerClick={this.onAnswerClickHandler}
                                quizLenght={this.state.quiz.length}
                                answerNumber={this.state.activeQuestion + 1}
                                state={this.state.answerState}
                            />
                    }

                </div>
            </div>
        );
    }
}

export default Quiz;
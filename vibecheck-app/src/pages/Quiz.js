import React, { useState } from 'react';
import './Quiz.css';
import questions from '../assets/questions';
import { Button } from 'react-bulma-components';

let userAnswers = new Array();

function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showResult, setShowResult] = useState(false);

    // Example answers array: [
    //     {
    //         index: 99,
    //         answerSelected: "answer selected"
    //     }

    // ]
    const handleAnswerOptionClick = (answerOption) => {
        const nextQuestion = currentQuestion + 1;
        
        // Save answer selected
        userAnswers.push({
            index: currentQuestion,
            answerSelected: answerOption.answerText
        });

        // Move on to next question if possible
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowResult(true);
        }
    };

    
    return (
        <div className="quiz">
        <div className='question-section'>
                <div className='question-count'>
                    <span>Question {currentQuestion + 1}</span>/{questions.length}
                </div>
                <div className='question-text'>{questions[currentQuestion].questionText}</div>
            </div>
            <div className='answer-section grid-container'>
                {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                    <div className='grid-box' key={questions[currentQuestion].id}>
                    <button onClick={() => handleAnswerOptionClick(answerOption)}>
                        <img src={require(`../assets/${answerOption.answerImage}`)} alt="" /> 
                        {answerOption.answerText}
                        </button>
                    </div>
                ))}

                {showResult && <div>
                    Generating playlist...
                    <Button> Retake quiz </Button>
                </div>}
            </div>
    </div>

    );
}

export default Quiz;




            // <div className="quiz">
            //     <div className='question-section'>
			// 			<div className='question-count'>
			// 				<span>Question {currentQuestion + 1}</span>/{questions.length}
			// 			</div>
			// 			<div className='question-text'>{questions[currentQuestion].questionText}</div>
			// 		</div>
			// 		<div className='answer-section'>
			// 			{questions[currentQuestion].answerOptions.map((answerOption, index) => (
                            
			// 				<button onClick={() => handleAnswerOptionClick(answerOption)}>{answerOption.answerText}</button>
			// 			))}
			// 		</div>

            // </div>

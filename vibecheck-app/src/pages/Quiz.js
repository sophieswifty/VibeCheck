import React, { useState } from 'react';

function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showResult, setShowResult] = useState(false);

    let questions = [
        {
            nextIndex: 1,
            questionText: "WHats ur Name",
            answerOptions: [
                { answerText: "SOFIA" },
                { answerText: "DENNIS" },
                { answerText: "RATS" },
                { answerText: "TURLRE" },
            ],
        },

        {
            nextIndex: 2,
            questionText: "second question",
            answerOptions: [
                {
                    answerText: "q2a1"
                },
                {
                    answerText: "q2a2"
                }

            ],
        }

    ];

    let userAnswers = new Array();
    
    // Example answers array: [
    //     {
    //         index: 99,
    //         answerSelected: "answer selected"
    //     }

    // ]

    if (showResult) {
        alert("DONE WITH QUIZ");
    }

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
            // 
            <Question question={questions[currentQuestion]} />
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

import React, { useState, useEffect } from 'react';
import './Quiz.css';
import questions from '../assets/questions';
import { Button, Box, Heading } from 'react-bulma-components';

// let filter = {
//     acousticness_low: 0,
//     acousticness_high: 0.25,
//     danceability_low: 0.4,
//     danceability_high: 0.65,
//     duration_ms_low: 0,
//     duration_ms_high: 600000,
//     energy_low: 0.5,
//     energy_high: 0.75,
//     instrumentalness_low: 0,
//     instrumentalness_high: 0.25,
//     key: 0,
//     liveness_low: 0,
//     liveness_high: 0.25,
//     loudness_low: -8,
//     loudness_high: 0,
//     mode: 1,
//     speechiness_low: 0,
//     speechiness_high: 0.25,
//     tempo_low: 60,
//     tempo_high: 140,
//     time_signature: 4,
//     valence_low: 0.5,
//     valence_high: 0.75
// };


let resetFilter = {
    acousticness_low: 0,
    acousticness_high: 0.25,
    danceability_low: 0.4,
    danceability_high: 0.65,
    duration_ms_low: 0,
    duration_ms_high: 600000,
    energy_low: 0.5,
    energy_high: 0.75,
    instrumentalness_low: 0,
    instrumentalness_high: 0.25,
    key: 0,
    liveness_low: 0,
    liveness_high: 0.25,
    loudness_low: -8,
    loudness_high: 0,
    mode: 1,
    speechiness_low: 0,
    speechiness_high: 0.25,
    tempo_low: 60,
    tempo_high: 140,
    time_signature: 4,
    valence_low: 0.5,
    valence_high: 0.75
};

function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [filter, setFilter] = useState({
        acousticness_low: 0,
        acousticness_high: 0.25,
        danceability_low: 0.4,
        danceability_high: 0.65,
        duration_ms_low: 0,
        duration_ms_high: 600000,
        energy_low: 0.5,
        energy_high: 0.75,
        instrumentalness_low: 0,
        instrumentalness_high: 0.25,
        key: 0,
        liveness_low: 0,
        liveness_high: 0.25,
        loudness_low: -8,
        loudness_high: 0,
        mode: 1,
        speechiness_low: 0,
        speechiness_high: 0.25,
        tempo_low: 60,
        tempo_high: 140,
        time_signature: 4,
        valence_low: 0.5,
        valence_high: 0.75
    });

    // Using filter as a global var which means when the user goes 
    
    const handleAnswerOptionClick = (answerOption) => {

        // Update filter by adding the value to the metric per question
        let filter_copy = filter;
        filter_copy[answerOption.metric] = filter[answerOption.metric] + answerOption.value;
        setFilter(filter_copy);

        const nextQuestion = questions[currentQuestion].nextIndex;

        if (nextQuestion != null) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowResult(true);
        }
    };

    const handleRestartClick = () => {
        setCurrentQuestion(0);
        setFilter(resetFilter);
    }


    return (
        <div className="quiz">
            <div className='question-section'>
                <Heading subtitle size={4} className='question-count'>
                    <span>Question {currentQuestion}</span>/{questions.length}
                </Heading>
                <Heading className='question-text'>{questions[currentQuestion].questionText}</Heading>
            </div>
            <div className='answer-section grid-container'>
                {!showResult && questions[currentQuestion].answerOptions.map((answerOption, index) => (
                    <div className='grid-box' key={questions[currentQuestion].id}>
                        <button onClick={() => handleAnswerOptionClick(answerOption)}>
                            <img src={'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'} alt="" />
                            {answerOption.answerText}
                        </button>
                    </div>
                ))
                }

                {!showResult && <Button onClick={handleRestartClick}>Restart</Button>}

                {showResult && 
                <div>
                    <Button>Generate playlist!</Button>
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

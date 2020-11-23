import React, { useState, useContext } from 'react';
import './Quiz.css';
import questions from '../assets/questions';
import { Button, Box, Heading, Field, Label, Control, Input, Form } from 'react-bulma-components';
import { fetchCandidateSongs, filterCandidateSongs, makePlaylist, createPlaylist, getPlaylist, addTracksToPlaylist } from '../API/spotifyAPI';
import NewPlaylist from '../components/NewPlaylist';
import { AudioBatchContext } from '../context/audiobatch';

const turnt = {
    accousticness: 0.15,
    accousticness_range: 0.15,
    danceability: 0.8,
    danceability_range: 0.2,
    energy: 0.8,
    energy_range: 0.2,
    instrumentalness: 0.2,
    instrumentalness_range: 0.2,
    speechiness: 0.33,
    speechiness_range: 0.33,
    valence: 0.7,
    valence_range: 0.3
}

const study = {
accousticness: 0.6,
    accousticness_range: 0.4,
    danceability: 0.1,
    danceability_range: 0.1,
    energy: 0.25,
    energy_range: 0.25,
    instrumentalness: 0.5,
    instrumentalness_range: 0.5,
    speechiness: 0.2,
    speechiness_range: 0.2,
    valence: 0.5,
    valence_range: 0.15
}

const exercise = {
    accousticness: 0.05,
    accousticness_range: 0.05,
    danceability: 0.8,
    danceability_range: 0.2,
    energy: 0.8,
    energy_range: 0.2,
    instrumentalness: 0.2,
    instrumentalness_range: 0.2,
    speechiness: 0.33,
    speechiness_range: 0.33,
    valence: 0.8,
    valence_range: 0.2

}

const vibes = {
    accousticness: 0.25,
    accousticness_range: 0.25,
    danceability: 0.2,
    danceability_range: 0.2,
    energy: 0.2,
    energy_range: 0.2,
    instrumentalness: 0.4,
    instrumentalness_range: 0.4,
    speechiness: 0.33,
    speechiness_range: 0.33,
    valence: 0.3,
    valence_range: 0.3
}


function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [showPlaylist, setShowPlaylist] = useState(false);
    const [cleanFilter, setCleanFilter] = useState(false);

    const [audioBatch, setAudioBatch] = useContext(AudioBatchContext);
    const [playlistName, setPlaylistName] = useState("Vibecheck Playlist");
    const [playlistData, setPlaylistData] = useState({});

    let resultFilter = {};

    if (cleanFilter) {
        resultFilter = {};
        setCleanFilter(false);
    }

    // Using filter as a global var which means when the user goes 

    const handleAnswerOptionClick = (answerOption) => {
    
        // Setting initial filter based off q1 answer.
        switch(answerOption.answerText) {
            case "Getting turnt":
                resultFilter = turnt;
                break;
            case "Study mode":
                resultFilter = study;
                break;
            case "Exercising":
                resultFilter = exercise;
                break;
            case "Just vibing.":
                resultFilter = vibes;
                break;
            default:
                break;
        }

        // Update filter by adding the value to the metric per question
        let filter_copy = JSON.parse(JSON.stringify(resultFilter));
        filter_copy[answerOption.metric] = resultFilter[answerOption.metric] + answerOption.value;
        resultFilter = filter_copy;

        const nextQuestion = answerOption.nextIndex;

        if (nextQuestion != null) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowResult(true);
        }
    };

    const handleRestartClick = () => {
        setCurrentQuestion(0);
        setShowResult(false);
        setShowPlaylist(false)
        setCleanFilter(true);
    }

    const generatePlaylist = () => {
        const resultPlaylist = filterCandidateSongs(audioBatch, resultFilter);
        
        createPlaylist(playlistName).then((playlist) => {
            const URIs = resultPlaylist.map(elt => elt.uri);
            
            addTracksToPlaylist(playlist.id, URIs).then(() => {
                
                getPlaylist(playlist.id).then((final_playlist) => {
                    setPlaylistData(final_playlist);
                    setShowPlaylist(true);
                    cleanFilter(true);
                })
            })
        }).catch((error) => {
            console.log(error);
        });
    }



    function handleChange(e) {
        setPlaylistName(e.target.value);
    }

    return (
        <div>
            {!showPlaylist && <div className="quiz">
                {!showResult && <div className="question-container">
                    <div className='question-section'>
                        <Heading subtitle size={6} className='question-count'>
                            <span>Question {currentQuestion}</span>/{questions.length}
                        </Heading>
                        <Heading className='question-text'>{questions[currentQuestion].questionText}</Heading>
                    </div>
                    <div className='answer-section grid-container'>
                        {!showResult && questions[currentQuestion].answerOptions.map((answerOption, index) => (
                            <div className='grid-box' key={questions[currentQuestion].id}>
                                <button onClick={() => handleAnswerOptionClick(answerOption)}>
                                    <div className="image-container">
                                        <img src={answerOption.answerImage} alt="" />
                                    </div>
                                    <p>{answerOption.answerText}</p>

                                </button>
                            </div>
                        ))
                        }
                    </div>
                </div>
                }

                {showResult &&
                    <div className="result-container">
                        <Box className='result-section'>
                            <Heading className='result-text'>You've got some good vibes...</Heading>

                            <label>Enter a playlist title: </label>
                            <input placeholder="Vibecheck Playlist" type="text" value={playlistName} onChange={handleChange} />

                            <Button size="large" fullwidth onClick={generatePlaylist}>Generate playlist!</Button>
                        </Box>
                    </div>
                }
                <Button className="restart-btn" onClick={handleRestartClick}>Restart</Button>

            </div>}
            {showPlaylist && <NewPlaylist restart={handleRestartClick} playlist={playlistData} />}
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

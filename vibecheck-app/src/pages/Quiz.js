import React, { useState, useContext } from 'react';
import './Quiz.css';
import questions from '../assets/questions';
import { Button, Box, Heading, Field, Label, Control, Input, Form } from 'react-bulma-components';
import { fetchCandidateSongs, filterCandidateSongs, makePlaylist, createPlaylist, getPlaylist, addTracksToPlaylist } from '../API/spotifyAPI';
import NewPlaylist from '../components/NewPlaylist';
import { AudioBatchContext } from '../context/audiobatch';

// NEW FILTER:
// acousticness: 0,
// danceability: 0,
// duration_ms: 0,
// energy: 0,
// instrumentalness: 0,
// liveness: 0,
// loudness: 0,
// mode: 0,
// speechiness: 0,
// tempo: 0,
// time_signature: 0,
// valence_high: 0

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
    const [showPlaylist, setShowPlaylist] = useState(false);
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

    const [audioBatch, setAudioBatch] = useContext(AudioBatchContext);
    const [playlistName, setPlaylistName] = useState("Vibecheck Playlist");
    const [playlistData, setPlaylistData] = useState({});

    // Using filter as a global var which means when the user goes 

    const handleAnswerOptionClick = (answerOption) => {
        // Update filter by adding the value to the metric per question
        let filter_copy = JSON.parse(JSON.stringify(filter));
        filter_copy[answerOption.metric] = filter[answerOption.metric] + answerOption.value;
        setFilter(filter_copy);

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
        setFilter(resetFilter);
    }

    const generatePlaylist = () => {
        // modify filter before sending
        let resultPlaylist = filterCandidateSongs(audioBatch, resetFilter);

        createPlaylist(playlistName).then((playlist) => {
            const URIs = resultPlaylist.map(elt => elt.uri);
            addTracksToPlaylist(playlist.id, URIs).then(() => {
                getPlaylist(playlist.id).then((final_playlist) => {
                   
                    setPlaylistData(final_playlist);
                    setShowPlaylist(true);
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
                            <div className='grid-box cropped' key={questions[currentQuestion].id}>
                                <button onClick={() => handleAnswerOptionClick(answerOption)}>
                                    <img src={answerOption.answerImage} alt="" />
                                    {answerOption.answerText}
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
            {showPlaylist && <NewPlaylist restart={handleRestartClick} playlist={playlistData}/>}
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

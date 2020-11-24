import React, { useState, useContext, useEffect } from 'react';
import './Quiz.css';
import questions from '../assets/questions';
import { Button, Box, Heading, Field, Label, Control, Input, Form, Loader } from 'react-bulma-components';
import { fetchCandidateSongs, filterCandidateSongs, makePlaylist, createPlaylist, getPlaylist, addTracksToPlaylist } from '../API/spotifyAPI';
import NewPlaylist from '../components/NewPlaylist';
import { AudioBatchContext } from '../context/audiobatch';
import { LoadingContext } from '../context/loading';
import Dots from '../components/Dots';

const turnt = {
    acousticness: 0.15,
    acousticness_range: 0.15,
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
    acousticness: 0.6,
    acousticness_range: 0.4,
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
    acousticness: 0.05,
    acousticness_range: 0.05,
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
    acousticness: 0.25,
    acousticness_range: 0.25,
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

let waitText = ["Synthesizing a sweet playlist", "Scanning for ~gOoD vIbEs~", "Artisan playlist incoming", "Curating the perfect tunes for you", "I think your mom will love this playlist", "Synchronizing the vibes", "Curating the best Country playlist just for you... jk!", "This'll be a hit with the ladies", "Stay tuned for incoming tunes", "You're promoted to leader of the aux", "BuzzFeed could never"];
let resultFilter = {};
let fakeCurrentQuestion = 0;

function Quiz(props) {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [showPlaylist, setShowPlaylist] = useState(false);
    const [cleanFilter, setCleanFilter] = useState(false);
    const [audioBatch, setAudioBatch] = useContext(AudioBatchContext);
    const [isLoading, setIsLoading] = useContext(LoadingContext);
    const [playlistName, setPlaylistName] = useState("Vibecheck Playlist");
    const [playlistData, setPlaylistData] = useState({});

    if (cleanFilter) {
        resultFilter = {};
        setCleanFilter(false);
    }

    if (currentQuestion === 0) {
        fakeCurrentQuestion = 0;
    }

    // Using filter as a global var which means when the user goes 

    const handleAnswerOptionClick = (answerOption) => {

        // Setting initial filter based off q1 answer.
        switch (answerOption.answerText) {
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
            fakeCurrentQuestion++;
        } else {
            setShowResult(true);
        }
    };

    const handleRestartClick = () => {
        fakeCurrentQuestion = 0;
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
                    setCleanFilter(true);
                })
            })
        }).catch((error) => {
            console.log(error);
        });
    }

    let randomGenerationText = waitText[Math.floor(Math.random() * waitText.length)];

    function handleChange(e) {
        setPlaylistName(e.target.value);
    }

    return (
        <div>
            {!showPlaylist && <div className="quiz">
                {!showResult && <div className="question-container">
                    <div className='question-section'>
                        <Heading subtitle size={6} className='question-count'>
                            <span>Question {fakeCurrentQuestion}</span>/{10}
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
                        
                            {isLoading ?
                                <div>
                                     <Heading className='result-text'>You've got some good vibes.</Heading>
                                    <Dots title={randomGenerationText} />
                                </div>
                                :
                                <div>
                                    <label className="label-entry">Enter a playlist title: </label>
                                    <input className="label-entry" size="40" placeholder="Vibecheck Playlist" type="text" value={playlistName} onChange={handleChange} />

                                    <Button size="large" fullwidth onClick={generatePlaylist}>Generate playlist!</Button>
                                </div>}
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

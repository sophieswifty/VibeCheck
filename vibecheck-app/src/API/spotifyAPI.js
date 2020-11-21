import { create } from 'lodash';

const axios = require('axios').default;

const id = "c712506f4ad74dcc9dbf58efc645a833";
let token = "";
const sample_song = "11dFghVXANMlKmJXsNCbNl";
const sample_song_b = "5lRzWDEe7UuedU2QPsFg0K";
const sample_artist = "0OdUWJ0sBjDrqHygGUXeCF";
const country = "US";
const authenticated = false;

export function setAccessToken(userToken) {
    token = userToken;
}

function getAccessToken() {
    var url = window.location;
    return new URLSearchParams(url.search).get("access_token");
}

function generateRandomString(length) {
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
};

export const authorize = async () => {
    const id = "c712506f4ad74dcc9dbf58efc645a833";
    var client_id = id; // Your client id
    var redirect_uri = "https://main.d3ejum8sktgg3x.amplifyapp.com/"; // Your redirect uri

    var state = generateRandomString(16);
    var stateKey = "spotify_auth_state";

    localStorage.setItem(stateKey, state);
    var scope = 'user-read-private user-read-email playlist-modify-public user-top-read';

    var url = 'https://accounts.spotify.com/authorize';
    url += '?response_type=token';
    url += '&client_id=' + encodeURIComponent(client_id);
    url += '&scope=' + encodeURIComponent(scope);
    url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
    url += '&state=' + encodeURIComponent(state);

    window.location.replace(url);
    return false;
}

const genericRequest = async (query_url) => {
    try {
        const res = await axios({
            method: 'get',
            url: query_url,
            headers: {
                'Authorization': 'Bearer ' + token
            }
        });
        return res.data;
    } catch (e) {
        return e;
    }
}

const songSearch = async (searchTerm) => {
    searchTerm = searchTerm.replace(" ","+");
    const searchUrl = "https://api.spotify.com/v1/search?query=" + searchTerm + "&offset=0&limit=20&type=track";
    try {
        const res = await axios({
            method: 'get',
            url: searchUrl,
            headers: {
                'Authorization': 'Bearer ' + token
            }
        });
        return res.data;
    } catch (e) {
        return e;
    }
}

const getArtist = async (artist_id) => {
    try {
        const res = await axios({
            method: 'get',
            url: "https://api.spotify.com/v1/artists/" + artist_id,
            headers: {
                'Authorization': 'Bearer ' + token
            }
        });
        return res.data;
    } catch (e) {
        return e;
    }
}

const getTracks = async (track_ids) => {
    var url = "https://api.spotify.com/v1/tracks/?ids=" + track_ids[0];
    for (var i = 1; i < track_ids.length; i++) {
        url += ",";
        url += track_ids[i];
    }
    try {
        const res = await axios({
            method: 'get',
            url: url,
            headers: {
                'Authorization': 'Bearer ' + token
            }
        });
        return res.data;
    } catch (e) {
        return e;
    }
}

const getArtistTopTracks = async (artist_id) => {
    try {
        const res = await axios({
            method: 'get',
            url: "https://api.spotify.com/v1/artists/" + artist_id + "/top-tracks"
            + "?country=" + country,
            headers: {
                'Authorization': 'Bearer ' + token
            }
        });
        return res.data;
    } catch (e) {
        return e;
    }
}

const getTrackData = async (song_id) => {
    try {
        const res = await axios({
            method: 'get',
            url: "https://api.spotify.com/v1/audio-features/" + song_id,
            headers: {
                'Authorization': 'Bearer ' + token
            }
        });
        return res.data;
    } catch (e) {
        return e;
    }
}

const getTracksData = async (song_ids) => {
    var url = "https://api.spotify.com/v1/audio-features/?ids=" + song_ids[0];
    for (var i = 1; i < song_ids.length; i++) {
        url += ",";
        url += song_ids[i];
    }
    try {
        const res = await axios({
            method: 'get',
            url: url,
            headers: {
                'Authorization': 'Bearer ' + token
            }
        });
        return res.data;
    } catch (e) {
        return e;
    }
}

export const getUserData = async () => {
    try {
        const res = await axios({
            method: 'get',
            url: "https://api.spotify.com/v1/me",
            headers: {
                'Authorization': 'Bearer ' + token
            }
        });
        return res.data;
    } catch (e) {
        return e;
    }
}

const getUserTopTracks = async (limit, offset) => {
    try {
        const res = await axios({
            method: 'get',
            url: "https://api.spotify.com/v1/me/top/tracks" +
            "?limit=" + limit + "&offset=" + offset,
            headers: {
                'Authorization': 'Bearer ' + token
            }
        });
        return res.data;
    } catch (e) {
        return e;
    }
}

const getUserTopArtists = async (limit, offset) => {
    try {
        const res = await axios({
            method: 'get',
            url: "https://api.spotify.com/v1/me/top/artists" +
            "?limit=" + limit + "&offset=" + offset,
            headers: {
                'Authorization': 'Bearer ' + token
            }
        });
        return res.data;
    } catch (e) {
        return e;
    }
}

const getUserAllTopArtists = async () => {
    console.log(token);
    return await getUserTopArtists(50,0);
}

const getRelatedArtists = async (artist_id) => {
    try {
        const res = await axios({
            method: 'get',
            url: "https://api.spotify.com/v1/artists/" + artist_id + "/related-artists/",
            headers: {
                'Authorization': 'Bearer ' + token
            }
        });
        return res.data;
    } catch (e) {
        return e;
    }
}

//returns all top artists and their related artists with no repeats
const getAllUserArtists = async () => {
    var artists = {};
    const topArtistsResult = await getUserAllTopArtists();
    topArtistsResult.items.forEach((elt) => {
        artists[elt.id] = elt.name;
    })
    for (var key in artists) {
        if (artists[key]) {
            const relatedArtistsResult = await getRelatedArtists(key);
            Array.prototype.forEach.call(relatedArtistsResult.artists, artist => {
            if (!artists[artist.id]) {
                artists[artist.id] = artist.name;
            }
        });
        }
    }
    return artists;
}

const getAllUserArtistsParallel = async () => {
    var artists = {};
    const topArtistsResult = await getUserAllTopArtists();
    Array.prototype.forEach.call(topArtistsResult.items, elt => {
        artists[elt.id] = elt.name;
    });
    const topArtists = Object.keys(artists);
    const promises = [];
    for (let i = 0; i < topArtists.length; i++) {
        promises.push(await getRelatedArtists(topArtists[i]));
    }
    Promise.all(promises).then((result) => {
        result.forEach((artist_arr) => {
            artist_arr.artists.forEach((artist) => {
                if (!artists[artist.id]) {
                    artists[artist.id] = artist.name;
                }
            });
        });
    });
    return artists;
}

// artists is an object with id: name pairs
const getTopSongsByArtists = async (artists) => {
    let topSongs = [];
    for (var key in artists) {
        if (artists[key]) {
            const topTracks = await getArtistTopTracks(key);
            topTracks.tracks.forEach((track) => {
                topSongs.push(track.id);
            });
        }
    }
    return topSongs;
}

const getArtistAlbums = async(artist_id) => {
    try {
        const res = await axios({
            method: 'get',
            url: "https://api.spotify.com/v1/artists/" + artist_id + "/albums",
            headers: {
                'Authorization': 'Bearer ' + token
            }
        });
        return res.data;
    } catch (e) {
        return e;
    }
}

const getSongsFromAlbum = async (album_id) => {
    try {
        const res = await axios({
            method: 'get',
            url: "https://api.spotify.com/v1/albums/" + album_id + "/tracks",
            headers: {
                'Authorization': 'Bearer ' + token
            }
        });
        return res.data;
    } catch (e) {
        return e;
    }
}

const getAllSongsByArtist = async (artist) => {
    let tracks = []; // list of song ids
    const albumData = await getArtistAlbums(artist);
    albumData.items.forEach(async (album) => {
        if (album.album_type == "album") {
            const tracksData = await getSongsFromAlbum(album.id);
            tracksData.items.forEach((track) => {
                tracks.push(track.id);
            })
        } 
    })
    return tracks;
}

const getAllUserAlbums = async () => {
    const album_list = [];
    getAllUserArtists().then(data => {
        Object.keys(data).forEach(artist_id => {
            getArtistAlbums(artist_id).then(albums => {
                albums.items.forEach(album => {
                    if (album.album_type == "album") {
                        album_list.append(album);
                    }
                })
            })
        })
    })
    return album_list;
}

// const getAllSongsByArtists = async (artists) => {
//     let tracks = [];
//     Object.keys(artists).forEach( async (artist_id) => {
//         const albumData = await getArtistAlbums(artist);
//     })
// }

const getCandidateSongIDs = async () => {
    const songs = [];
    const artistResult = await getAllUserArtists();
    Object.keys(artistResult).forEach(async (artist) => {
        const artistTracks = await getArtistTopTracks(artist);
        if (artistTracks.headers) {
            if (artistTracks.headers["Retry-After"]) {
                console.log(artistTracks);
            }
        }
        artistTracks.tracks.forEach((track) => {
            songs.push(track.id);
        });
    });
    return songs;
}

const getCandidateSongIDsParallel = async () => {
    const artistResult = await getAllUserArtists();
    const artists = Object.keys(artistResult);
    const songs = [];
    const promises = [];
    const newPromises = [];
    artists.forEach((artist) => {
        promises.push(getArtistTopTracks(artist));
    });
    Promise.all(promises).then((result) => {
        result.forEach((topTracks) => {
            topTracks.tracks.forEach((track) => {
                newPromises.push(getTrackData(track.id));
            });
        });
    });
    Promise.all(newPromises).then((result) => {
        console.log(result);
    })
    return songs;
}

const getCandidateTracks = async () => {
    const tracks = [];
    getCandidateSongIDs().then((data) => {
        data.forEach(async(song_id) => {
            const result = await getTrackData(song_id);
            tracks.push(result);
        });
    });
    return tracks;
}

const getItAll = async () => {
    const results = [];
    const allArtists = await getAllUserArtists();
    Object.keys(allArtists).forEach((artist_id) => {
        getArtistTopTracks(artist_id).then((topSongs) => {
            const songIds = topSongs.tracks.map(elt => elt.id);
            getTracksData(songIds).then((data) => {
                if (data.response) {
                    if (data.response.status == 429) {
                        const waitTime = parseInt(data.response.headers["retry-after"]);
                        setTimeout(1000 * (1+waitTime));
                    }
                }
                data.audio_features.forEach((track) => {
                    results.push(track);
                })
            })
        });
    });
    return results;
}

const getDataFromTracks = async (tracks) => {
    const audio_feats = [];
    const n_full_iters = Math.floor(tracks.length / 100);
    for (let i = 0; i < n_full_iters; i++) {
        const batch = await getTracksData(tracks.slice(i*100,(i+1)*100));
        batch.audio_features.forEach((elt) => {
            audio_feats.push(elt);
        });
    }
    const last = await getTracksData(tracks.splice(n_full_iters*100,tracks.length));
    last.audio_features.forEach((elt) => {
        audio_feats.push(elt);
    });
    return audio_feats;
}

const passesFilter = (trackInfo, filter) => {
    return trackInfo.acousticness >= filter.acousticness_low &&
    trackInfo.acousticness <= filter.acousticness_high &&
    trackInfo.danceability >= filter.danceability_low &&
    trackInfo.danceability <= filter.danceability_high &&
    trackInfo.duration_ms >= filter.duration_ms_low &&
    trackInfo.duration_ms <= filter.duration_ms_high &&
    trackInfo.energy >= filter.energy_low &&
    trackInfo.energy <= filter.energy_high &&
    trackInfo.instrumentalness >= filter.instrumentalness_low &&
    trackInfo.instrumentalness <= filter.instrumentalness_high &&
    //trackInfo.key == filter.key && 
    trackInfo.liveness >= filter.liveness_low &&
    trackInfo.liveness <= filter.liveness_high &&
    trackInfo.loudness >= filter.loudness_low &&
    trackInfo.loudness <= filter.loudness_high &&
    trackInfo.mode == filter.mode && 
    trackInfo.speechiness >= filter.speechiness_low &&
    trackInfo.speechiness <= filter.speechiness_high &&
    trackInfo.tempo >= filter.tempo_low &&
    trackInfo.tempo <= filter.tempo_high &&
    trackInfo.time_signature == filter.time_signature &&
    trackInfo.valence >= filter.valence_low &&
    trackInfo.valence <= filter.valence_high;
}

const getFullSongName = (track) => {
    let str = track.name + " by " + track.artists[0].name;
    for (let i = 1; i < track.artists.length - 1; i++) {
        str += ", " + track.artists[1].name;
    }
    str += " and " + track.artists[track.artists.length -1].name;
    return str;
}

const runTests = () => {
    getUserData().then((data) => {
        console.log(data.id);
    })
    
    getArtistTopTracks(sample_artist).then((data) => {
        console.log(data);
    });
    
    getTrackData(sample_song).then((data) => {
        console.log(data);
    });
    
    getTracksData([sample_song, sample_song_b]).then((data) => {
        console.log(data);
    });
}

const testParallelism = async () => {
    var t0 = performance.now();
    const a = await getAllUserArtists();
    var t1 = performance.now();
    console.log("Sequential took " + (t1-t0) + " milliseconds");
    
    var t2 = performance.now();
    const b = await getAllUserArtistsParallel();
    var t3 = performance.now();
    console.log("Parallel took " + (t3-t2) + " milliseconds");
}

const createPlaylist = async (name) => {
    const userData = await getUserData();
    try {
        const res = await axios({
            method: 'post',
            url: "https://api.spotify.com/v1/users/" + userData.id + "/playlists",
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': "application/json"
            },
            data: {
                name: name
            }
        });
        return res.data;
    } catch (e) {
        return e;
    }
}

const addTracksToPlaylist = async (playlist_id, track_uris) => {
    let url = "https://api.spotify.com/v1/playlists/" + playlist_id + "/tracks?uris=" + track_uris[0];
    for (let i = 1; i < track_uris.length; i++) {
        url += "," + track_uris[i];
    }
    try {
        const res = await axios({
            method: 'post',
            url: url,
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': "application/json"
            }
        });
        return res.data;
    } catch (e) {
        return e;
    }
}

export const practiceWaiting = async () => {
    const songsToGet = ["11dFghVXANMlKmJXsNCbNl","11dFghVXANMlKmJXsNCbNl","11dFghVXANMlKmJXsNCbNl","11dFghVXANMlKmJXsNCbNl","11dFghVXANMlKmJXsNCbNl"];
    for (let i = 0; i < songsToGet.length; i++) {
        let success = false;
        console.log("Making api call at i=" + i);
        let res = await getTrackData(songsToGet[i]);
        if (i != 3) {
            success = true;
        } else {
            setTimeout(async () => {
                res = await getTrackData(songsToGet[i]);
                success = true;
            },2000);
        }
        while (!success) {
            //no-op
        }
        console.log("Printing at i=" + i);
        console.log(res);
    }
}

export const foo = async () => {
    songSearch("Love You").then(data => console.log(data));
    // const results = [];
    // await getAllUserArtists().then(data => {
    //     Object.keys(data).forEach(async (artist_id) => {
    //         const starting_url = "https://api.spotify.com/v1/search?type=track&q=artist:" + data[artist_id];
    //         const res = await genericRequest(starting_url);
    //         results.push(res);
    //     })
    // }).then(console.log(results));
}

const fetchCandidateSongs = async () => {
    getAllUserArtists().then((topArtists) => {
        getTopSongsByArtists(topArtists).then((tracks) => {
            getDataFromTracks(tracks).then((audio_features) => {
                // do something with audio features
            })
        })
    })
}

// audio_features is a list of all fetched candidate songs' audio features
const filterCandidateSongs = (audio_features, filter) => {
    const passed_tracks = audio_features.filter((elt) => passesFilter(elt, filter));
}

const makePlaylist = async(tracks, playlistName) => {
    createPlaylist(playlistName).then((playlist) => {
        const URIs = tracks.map(elt => elt.uri);
        addTracksToPlaylist(playlist.id, URIs);
    })
}

export const doItAll = async (filter) => {
    getAllUserArtists().then((data) => {
        console.log("Found All Artists")
        console.log(data);
        getTopSongsByArtists(data).then((tracks) => {
            console.log("Found artist top songs");
            console.log(tracks);
            getDataFromTracks(tracks).then((audio_features) => {
                console.log("Retrieved song feature data");
                const passedTracks = audio_features.filter((elt) => passesFilter(elt,filter));
                const passedIDs = passedTracks.map(elt => elt.id);
                getTracks(passedIDs).then((songs) => console.log(songs.tracks.map(e => getFullSongName(e))));
                const passedURIs = passedTracks.map(elt => elt.uri);
                // createPlaylist("VibeCheck2").then((playlist) => {
                //     console.log(playlist);
                //     addTracksToPlaylist(playlist.id, passedURIs);
                // })
            });
        });
    });
}

// const audio_feats = [];
// getAllUserArtists().then(data => {
//     const artistIDList = Object.keys(data);
//     artistIDList.forEach((artist_id) => {
//         let res = getArtistTopTracks(artist_id);
//         while (res.response) {
//             const waitTime = parseInt(res1.response.headers["retry-after"]);
//             sleep(waitTime * 1000);
//             res = getArtistTopTracks(artist_id);
//         }
//         const song_ids = res.tracks.map(elt => elt.id);
//         let trackInfo = getTracksData(song_ids);
//         while (trackInfo.response) {
//             const waitTime = parseInt(res1.response.headers["retry-after"]);
//             sleep(waitTime * 1000);
//             trackInfo = getTracksData(song_ids);
//         }
//         trackInfo.audio_features.forEach((elt) => {
//             audio_feats.push(elt);
//         })
//     });
// }).then(console.log(audio_feats));

//getAllUserArtistsParallel().then((data) => console.log(data));
// testParallelism();
// getCandidateTracks().then(data => console.log(data));
// getItAll().then(data => console.log(data));

// getUserTopArtists(50,0).then((data) => {
//     const simpleData = data.items.map(elt => elt.name);
//     console.log(simpleData);
//     // getRelatedArtists(data.items[0].id).then((rel) => {
//     //     const simpleRel = rel.artists.map(elt => elt.name);
//     //     console.log(simpleRel);
//     // });
//     getArtistTopTracks(data.items[0].id).then(d => console.log(d));
// });

// getUserTopTracks(50,0).then((data) => {
//     const simpleData = data.items.map(elt => elt.name);
//     console.log(simpleData);
// })

// getUserTopTracks(50,0).then((data) => {
//     console.log(data);
//     getTrackData(data.items[0].id).then((metrics) => {
//         console.log(metrics);
//     })
// })

// getAllUserArtistsParallel().then((data) => {
//     console.log(data);
// })

// const audio_feats = [];
// getUserAllTopArtists().then((data) => {
//     data.items.forEach((topArtist) => {
//         getRelatedArtists(topArtist.id).then((related) => {
//             related.artists.forEach((artist) => {
//                 getArtistTopTracks(artist.id).then((songs) => {
//                     getTracksData(songs.tracks.map(elt => elt.id)).then((info) => {
//                         info.audio_features.forEach((audio) => {
//                             audio_feats.push(audio);
//                         });
//                     });
//                 });
//             });
//         });
//     });
// }).then(console.log(audio_feats));

const filter = {
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

// getAllUserArtists().then((data) => {
//     getTopSongsByArtists(data).then((tracks) => {
//         getDataFromTracks(tracks).then((audio_features) => {
//             const passedTracks = audio_features.filter((elt) => passesFilter(elt,filter));
//             console.log(passedTracks);
//             const passedIDs = passedTracks.map(elt => elt.id);
//             getTracks(passedIDs).then((songs) => console.log(songs.tracks.map(e => getFullSongName(e))));
//             const passedURIs = passedTracks.map(elt => elt.uri);
//             addTracksToPlaylist("VibeCheck", passedURIs);
//         });
//     });
// });

// createPlaylist("VibeCheck").then(data => console.log(data));

// getAllUserArtists().then((data) => {
//     console.log(data);
//     getTopSongsByArtists(data).then((tracks) => {
//         console.log(tracks);
//     });
// });

// getAllUserArtists().then((data) => {
//     getTopSongsByArtists(data).then((tracks) => {
//         // const firstBatch = tracks.splice(0,100);
//         // getTracksData(firstBatch).then((res) => {
//         //     console.log(res);
//         // })
//         console.log(tracks);
//         const batchSize = 100;
//         const n_full_iters = Math.floor(tracks.length / batchSize);
//         for (let i = 0; i < n_full_iters; i++) {
//             const batch = tracks.slice(i*batchSize, (i+1)*batchSize);
//             console.log(batch.length);
//             getTracksData(batch).then((res) => {
//                 console.log(res);
//             });
//         }
//     });
// });

// // var access_token = getAccessToken();
// var access_token = "BQBaD0ITp2A7xN148yYRBGPCaG2t5_gqWapi0BtVXI7ajLGH_8AJH9nKZfThPMvmkzmYZsnJcNYzGCCwJmRe3OFkNmnqg5CkLJAV4BFtoQtBWRFJfLydKthhaHdkuJTjmwMPZxGdZHmc-0TmgDRw1zwfnMrZMTUW";
// if (access_token != null) {
//     token = access_token;
//     runTests();
// }

// document.querySelector("#sign-in").addEventListener("click", function(event) {
//     alert("Signing in");
//     event.preventDefault();
//     authorize();
// });
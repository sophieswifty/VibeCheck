const id = "c712506f4ad74dcc9dbf58efc645a833";
const token = "BQDvatkphjyqa2CYaXFe1d5gl-L5-m0pZ2NeICXBxjPldRGUYDec1fvCnH65TH0fKuaZ7HiQks3EbUr_usL8wXeY8YOW-yw-Xj8PCLf_Og19zOxZOCG0eazBuS6prCM-oFF5q5GZHqwvGaG4Q4YnGuYhsC_OBkLR2JdKobuEd3r3yBk0xLQuJlD1fuD6qExitkA";
const sample_song = "11dFghVXANMlKmJXsNCbNl";
const sample_song_b = "5lRzWDEe7UuedU2QPsFg0K";
const sample_artist = "0OdUWJ0sBjDrqHygGUXeCF";
const country = "US";
const authenticated = false;

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

const auth = async () => {
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

const authorize = async () => {
    const return_uri = "https://main.d3ejum8sktgg3x.amplifyapp.com/"
    const res = await axios({
        method: 'get',
        url: 'https://accounts.spotify.com/authorize?' + 'client_id=' + id + 
        '&response_type=token&redirect_uri=' + return_uri
    });
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

const getUserData = async () => {
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
    Array.prototype.forEach.call(topArtistsResult.items, elt => {
        artists[elt.id] = elt.name;
    });
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
    // Array.prototype.forEach.call(topArtistsResult.items, async (elt) => {
    //     const relatedArtistsResult = await getRelatedArtists(elt.id);
    //     Array.prototype.forEach.call(relatedArtistsResult.artists, artist => {
    //         if (!artists[artist.id]) {
    //             artists[artist.id] = artist.name;
    //         }
    //     });
    // })
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
    console.log(topSongs.length);
    return topSongs;
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

document.querySelector("button.is-link").addEventListener("click", function(event) {
    event.preventDefault();
    auth();
});

// getUserTopArtists(50,0).then((data) => {
//     const simpleData = data.items.map(elt => elt.name);
//     console.log(simpleData);
//     getRelatedArtists(data.items[0].id).then((rel) => {
//         const simpleRel = rel.artists.map(elt => elt.name);
//         console.log(simpleRel);
//     });
// });

// getUserTopTracks(50,0).then((data) => {
//     console.log(data);
//     getTrackData(data.items[0].id).then((metrics) => {
//         console.log(metrics);
//     })
// })

getAllUserArtists().then((data) => {
    console.log(Object.keys(data).length + " artists");
    getTopSongsByArtists(data).then((tracks) => {
        console.log(tracks);
    })
});

// // var access_token = getAccessToken();
// var access_token = "BQBaD0ITp2A7xN148yYRBGPCaG2t5_gqWapi0BtVXI7ajLGH_8AJH9nKZfThPMvmkzmYZsnJcNYzGCCwJmRe3OFkNmnqg5CkLJAV4BFtoQtBWRFJfLydKthhaHdkuJTjmwMPZxGdZHmc-0TmgDRw1zwfnMrZMTUW";
// if (access_token != null) {
//     token = access_token;
//     runTests();
// }
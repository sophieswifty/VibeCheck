const id = "c712506f4ad74dcc9dbf58efc645a833";
// const token = "BQDQzvWWwUJSrq1EfaE8XPmF7r3aYM8oe1fgPuX2T8l3s6fOzhCOps81rHH2D25PisN4g3CmXmGUWIRizHYk1Rjdbxq1iYLshPfoU29EcMnFsWICD6Lz4PppHzO_8nsNXR31EZVrjd3jXYmGdfB_D_wFoR8iurVK";
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
    var redirect_uri = "https://dennis.d3ejum8sktgg3x.amplifyapp.com/"; // Your redirect uri

    var state = generateRandomString(16);
    var stateKey = "spotify_auth_state";

    localStorage.setItem(stateKey, state);
    var scope = 'user-read-private user-read-email';

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
    const return_uri = "https://dennis.d3ejum8sktgg3x.amplifyapp.com/"
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
    auth().then(() => {
        console.log("HERE");
    });
});

var access_token = getAccessToken();
if (access_token != null) {
    runTests();
}
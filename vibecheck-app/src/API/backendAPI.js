import axios from "axios"

let userInfo; // The user info object
let playlistInfo; // The spotify playlist object that is generated when they create playlist
let addPlaylistToBackend = async (userInfo, playlistInfo) => {
    await axios({
        method: 'POST', 
        url: 'https://vibecheck-please.herokuapp.com/playlists',
        body: {
            "playlistID": "", // Spotify Playlist ID -> playlistInfo.id
            "playlistURL": "", // Spotify Playlist URL -> playlistInfo.external_urls.spotify
            "playlistName": "", // Spotify Playlist Name -> playlistInfo.name
            "playlistIMG": "", // Spotify Playlist IMG -> playlistInfo.images[0].url
            "userID": "", // Spotify Username -> userInfo.id
            "displayName": "" // Spotify Profile Display Name -> userInfo.display_name
        }

    })
}

//Takes in user ID
//Deletes all playlists created by that user
export const deleteAllUserPlaylists = async (userID) => {
    //Iterate through entire backend
    axios.get('https://vibecheck-please.herokuapp.com/playlists/all').then( (res) => {
        for (let i = 0; i < res.length; i++) {
            if (res[i].userID == userID) {
                axios.delete(`https://vibecheck-please.herokuapp.com/playlists/${res[i].backendID}`);
            }
        }
    });
}

//Takes in the user ID and the playlist ID
//Deletes specific playlist made by user
export const deleteSpecificPlaylist = async (userID, playlistID) => {
    axios.get('https://vibecheck-please.herokuapp.com/playlists/all').then( (res) => {
        for (let i = 0; i < res.length; i++) {
            if (res[i].userID == userID && res[i].playlistID == playlistID) {
                axios.delete(`https://vibecheck-please.herokuapp.com/playlists/${res[i].backendID}`);
                break;
            }
        }
    });
}
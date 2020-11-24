import axios from "axios"

let userInfo; // The user info object
let playlistInfo; // The spotify playlist object that is generated when they create playlist

export const addPlaylistToBackend = (userInfo, playlistInfo) => {
    axios.post('https://vibecheck-please.herokuapp.com/playlists', {
        playlistID: playlistInfo.id,
        playlistURL: playlistInfo.external_urls.spotify,
        playlistName: playlistInfo.name,
        playlistIMG: playlistInfo.images[0].url, 
        userID: userInfo.id,
        displayName: userInfo.display_name
    })
}

//Takes in user ID
//Deletes all playlists created by that user
export const deleteAllUserPlaylists = async (userID) => {
    //Iterate through entire backend
    axios.get('https://vibecheck-please.herokuapp.com/playlists/all').then( (res) => {
        res.data.forEach( (elt) => {
            if (elt.userID === userID) {
                axios.delete(`https://vibecheck-please.herokuapp.com/playlists/${elt.backendID}`);
            }
        });
    });
}

//Takes in the user ID and the playlist ID
//Deletes specific playlist made by user
export const deleteSpecificPlaylist = async (userID, playlistID) => {
    axios.get('https://vibecheck-please.herokuapp.com/playlists/all').then( (res) => {
        res.data.forEach( (elt) => {
            if (elt.userID === userID && elt.playlistID === playlistID) {
                axios.delete(`https://vibecheck-please.herokuapp.com/playlists/${elt.backendID}`);
                return;
            };
        });
    });
}
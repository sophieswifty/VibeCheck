const { default: Axios } = require('axios');

const playlist_data = require('data-store')({path: process.cwd() + '/data/playlist.json'});

class Playlist {
    constructor(backendID, playlistID, playlistURL, playlistName, playlistIMG, userID, displayName) {
        //Backend ID
        this.backendID = backendID;

        //the ID of the playlist on spotify
        this.playlistID = playlistID

        //the playlist url on spotify
        this.playlistURL = playlistURL;

        //the playlist name on spotify
        this.playlistName = playlistName    

        //The url to the spotify playlist img cover
        this.playlistIMG = playlistIMG;

        //The ID of the user on spotify (their spotify username)
        this.userID = userID;

        //The display name on spotify
        this.displayName = displayName;
    }
    update() {
        playlist_data.set(this.backendID.toString(), this);
    }
    delete() {
        playlist_data.del(this.backendID.toString());
    }
}

Playlist.getAllIDs = () => {
    return Object.keys(playlist_data.data).map((id => {return parseInt(id);}));
}
Playlist.getAllPlaylists = () => {
    return Object.entries(playlist_data.data).map((p => {return p[1];}));
}
Playlist.findByID = (id) => {
    let p_data =  playlist_data.get(id);
    if (p_data == null) {
        return null;
    }
    return new Playlist(id, p_data.playlistID, p_data.playlistURL, p_data.playlistName, p_data.playlistIMG, p_data.userID, p_data.displayName);
}

Playlist.next_id = Playlist.getAllIDs().reduce((max, next_id) => {
    if (next_id > max) {
        return next_id;
    }
    return max;
}, -1) + 1;

Playlist.create = (playlistID, playlistURL, playlistName, playlistIMG, userID, displayName) => {
    let id = Playlist.next_id;
    Playlist.next_id += 1;

    let playlist = new Playlist(id, playlistID, playlistURL, playlistName, playlistIMG, userID, displayName);
    playlist_data.set(id.toString(), playlist);
    return playlist;
}

module.exports = Playlist;
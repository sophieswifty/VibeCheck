const playlist_data = require('data-store')({path: process.cwd() + '/data/playlist.json'});


class Playlist {
    constructor(id, username, tracks) {
        this.id = id;

        //the id associated with the created playlist, the id is a string (username) not a number
        this.username = username;
        //the playlist itself, which will be an array of track ids
        this.tracks = tracks;
    }
}

Playlist.getAllIDs = () => {
    return Object.keys(playlist_data.data).map((id => {return parseInt(id);}));
}
Playlist.findByID = (id) => {
    return playlist_data.get(id);
}

Playlist.next_id = Playlist.getAllIDs().reduce((max, next_id) => {
    if (next_id > max) {
        return next_id;
    }
    return max;
}, -1) + 1;

Playlist.create = (username, tracks) => {
    let id = Playlist.next_id;
    Playlist.next_id += 1;

    let playlist = new Playlist(id, username, tracks);
    playlist_data.set(playlist.id.toString(), playlist);
    return playlist;
}

module.exports = Playlist;
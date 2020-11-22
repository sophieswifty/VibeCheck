const playlist_data = require('data-store')({path: process.cwd() + '/data/playlist.json'});

class Playlist {
    constructor(id, username, tracks) {
        this.id = id;

        //the id associated with the created playlist, the id is a string (username) not a number
        this.username = username;
        //the playlist itself, which will be an array of track ids
        this.tracks = tracks;
    }
    update() {
        playlist_data.set(this.id.toString(), this);
    }
    delete() {
        playlist_data.del(this.id.toString());
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
    return new Playlist(p_data.id, p_data.username, p_data.tracks);
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
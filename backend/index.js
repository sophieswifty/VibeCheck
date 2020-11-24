const express = require ('express');
const app = express();
const Playlist = require('./Playlist.js');
const bodyParser = require('body-parser');
app.use(bodyParser.json());

var cors = require('cors');

app.use(cors())
if (process.env.NODE_ENV === "production") {
    app.use(express.static("../vibecheck-app/build"));
}

app.get('/playlists', (req, res) => {
    res.json(Playlist.getAllIDs());
    return;
});

app.get('/playlists/all', (req, res) => {
    res.json(Playlist.getAllPlaylists());
    return;
});

app.get('/playlists/:id', (req, res) => {
    let p = Playlist.findByID(req.params.id);
    if (p == null) {
        res.status(404).send('Playlist not found');
        return
    }
    res.json(p);
});

app.post('/playlists', (req, res) => {
    let {playlistID, playlistURL, playlistName, playlistIMG, userID, displayName} = req.body;
    if (playlistID == null || playlistURL == null || playlistName == null || playlistIMG == null || userID == null || displayName == null) {
        res.status('404').send('Bad Request - Ujesh');
        return;
    }
    let playlist = Playlist.create(playlistID, playlistURL, playlistName, playlistIMG, userID, displayName);

    if (playlist == null) {
        res.status(404).send('Bad Request');
        return;
    }
    return res.json(playlist);
});

app.put('/playlists/:id', (req, res) => {
    let p = Playlist.findByID(req.params.id);
    if (p == null) {
        res.status(404).send('Playlist not found');
        return
    }
    let {playlistID, playlistURL, playlistName, playlistIMG, userID, displayName} = req.body;
    if (playlistID == null || playlistURL == null || playlistName ==  null || playlistIMG == null || userID == null || displayName == null) {
        res.status(404).send('Did not meet all properties');
        return;
    }
    p.playlistID = playlistID;
    p.playlistURL = playlistURL;
    p.playlistName = playlistName;
    p.playlistIMG = playlistIMG;
    p.userID = userID;
    p.displayName = displayName;

    p.update();
    res.json(p);
});


app.delete('/playlists/:id', (req, res) => {
    let p = Playlist.findByID(req.params.id);
    if (p === null) {
        res.status(404).send('Playlist not found');
        return
    }
    p.delete();
    res.json(true);
});

const port = process.env.PORT || 80;
app.listen(port, () => {
    console.log(`Local Host ${port} is running`);
})
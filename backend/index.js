const express = require ('express');
const app = express();
const Playlist = require('./Playlist.js');
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/playlists', (req, res) => {
    res.json(Playlist.getAllIDs());
    return;
});

app.get('/playlists/:id', (req, res) => {
    let p = Playlist.findByID(req.params.id);
    if (p == null) {
        req.status(404).send('Playlist not found');
        return
    }
    res.json(p);
});

app.post('/playlists', (req, res) => {
    let {username, tracks} = req.body;
    let playlist = Playlist.create(username, tracks);

    if (playlist == null) {
        res.status(404).send('Bad Request');
        return;
    }
    return res.json(playlist);
});

const port = 3000;
app.listen(port, () => {
    console.log('tutorial');
})
const express = require ('express');
const app = express();
const Playlist = require('./Playlist.js');
const bodyParser = require('body-parser');
app.use(bodyParser.json());

var cors = require('cors')

app.use(cors())

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
    let {username, tracks} = req.body;
    if (username == null || tracks == null) {
        res.status('404').send('Bad Request - Ujesh');
        return;
    }
    let playlist = Playlist.create(username, tracks);

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
    let {username, tracks} = req.body;
    p.username = username;
    p.tracks = tracks;
    p.update();

    res.json(p);
});


app.delete('/playlists/:id', (req, res) => {
    let p = Playlist.findByID(req.params.id);
    if (p == null) {
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

import { getTracks } from "./spotifyAPI.js"

export function generateTitle() {
    let section = document.createElement('section');
    section.classList.add('section');

    let content = document.createElement('div');
    content.classList.add('content', 'has-text-centered');
    section.append(content);

    let title = document.createElement('h1');
    title.classList.add('title');
    title.textContent = 'User Generated Playlists';
    content.append(title);

    return section;
}

export async function getPlaylistFeed() {
    try {
        const result = await axios({
            method: 'get',
            url: 'http://localhost:3030/playlists/all',
        });
        return result.data;
    } catch (error) {
        return 'Could not get playlist feed'
    }
}
async function generateTrackList(index) {
    let feed = await getPlaylistFeed();
    feed = feed.splice(feed.length - 10,feed.length - 1).reverse();

    //array of track ids
    let tracks = feed[index].tracks;
    
    let output = '';
    for (let i = 0; i < tracks.length; i++) {
        var track = await getTracks([tracks[i]]);
        output += `<strong>${track.tracks[0].name}</strong> - ${track.tracks[0].artists[0].name} <br>`;
    }

    return output;
}
async function handlePlaylistClick(ev) {
    //Find playlist that was clicked
    let clickedPlaylist;
    let index;
    for (let i = 0; i < document.getElementsByClassName('playlist').length; i++) {
        if (ev.currentTarget.getAttribute('data-id') == document.getElementsByClassName('playlist').item(i).getAttribute('data-id')) {
            index = i;
            clickedPlaylist = document.getElementsByClassName('playlist').item(i);
        }
    }
    if (clickedPlaylist.getElementsByTagName('img').length > 0) {
        let content = document.createElement('div');
        content.classList.add('content', 'tracks');

        let p = document.createElement('p');
        p.innerHTML = await generateTrackList(index);
        content.append(p);

        clickedPlaylist.getElementsByTagName('img').item(0).replaceWith(content);
    } else {
        let feed = await getPlaylistFeed();
        feed = feed.splice(feed.length - 10,feed.length - 1).reverse();

        var track_data = await getTracks([feed[index].tracks[0]]);
        var image = track_data.tracks[0].album.images[1];
        var thumbnail = document.createElement('img');
        thumbnail.src = image.url;

        clickedPlaylist.getElementsByClassName('tracks').item(0).replaceWith(thumbnail);
    }
}

export async function generatePlaylists() {
    let section = document.createElement('section');
    section.classList.add('section');    

    let container = document.createElement('div');
    container.classList.add('container');
    section.append(container);
    
    let feed = await getPlaylistFeed();
    feed = feed.splice(feed.length - 10,feed.length - 1).reverse();
    console.log(feed);
    //Generate 2 rows of 5
    generateTiles(container, feed);
    return section;
}
export async function generateTiles(container, feed) {
    for (let i = 0; i < 2; i++) {
        var ancestor = document.createElement('div');
        ancestor.classList.add('tile', 'is-ancestor');
        container.append(ancestor);
        for (let j = 0; j < 5; j++) {
            var parent = document.createElement('div');
            parent.classList.add('tile', 'is-parent');
            ancestor.append(parent);

            var child = document.createElement('a');
            child.classList.add('tile', 'is-child', 'box', 'playlist');
            child.setAttribute('data-id', `${i*5 + j}`);
            parent.append(child);

            var content = document.createElement('div');
            content.classList.add('content');
            child.append(content);

            var username = feed[i*5 + j].username;
            var h1 = document.createElement('h1');
            h1.textContent = username;
            content.append(h1);

            var track_data = await getTracks([feed[i*5 + j].tracks[0]]);
            var image = track_data.tracks[0].album.images[1];
            var thumbnail = document.createElement('img');
            thumbnail.src = image.url;
            child.append(thumbnail);

            //EVENT HANDLERS
            child.addEventListener('click', handlePlaylistClick); 
        }
    }
    return ancestor;
}
export const buildPage = async function() {
    const $root = $('#root');
    $root.append(generateTitle());
    $root.append(await generatePlaylists());
}
$(function() {
    buildPage();
});

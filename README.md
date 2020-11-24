# Vibecheck
#### Generate custom playlists to match your vibe, gain insights into your listening habits, and more!

## Developer Notes:
* Npm install the following packages:
    * bulma,
    * react,
    * react-router,
    * [react-bulma-components](https://couds.github.io/react-bulma-components/?path=/story/box--default),
    * axios
    * font-awesome (use: `npm install --save @fortawesome/fontawesome-free`)
    * recharts
    * throttle-debounce
    * rect-google-charts
    

* To run in browser: `npm start` (browser-sync no longer needed)

### Project organization:
* `public/`
   * `index.html`
   * `style.css`

* `src/` for - you guessed it - source code
   * `API/` for api functions
   * `assets/` for pictures, media, misc.
   * `components/` for UI components of the site
   * `pages/` houses each page of the site as a React component
   * `utils/` any helper (utility) functions, classes, enums, etc.
   * `index.js` renders the React components in the html using the querySelector
   * `App.js` creates the entire app with React components
      
### Page organization
* New user:
  * Home page:
      - Log in button --> Spotify login
      - Description
      - Recently generated playlists from users
  
  * Tools
      - Vibify a song <--- Uses autocomplete (throttle debounce library)
      - Vibify a playlist , <--- Uses autocomplete (throttle debounce library)
   
* User logged in:
  * Dashboard: 
      - User's generated playlists. 
      - Suggested vibe playlists.
      - Friends? Friends' playlists?
  
  * Quiz:
      - Carousel of quiz questions
  
  * Tools:
      - Vibecheck a song
      - Vibecheck a playlist
      - Add to my playlists button?
  * Statistics:
      - User top played tracks
      - User top played artists
   * Log out button
   
  ### Design Patterns:
  * `useEffect()` and `useState()` from React
  * React Context (see: https://reactjs.org/docs/context.html and https://medium.com/better-programming/building-basic-react-authentication-e20a574d5e71)
  * React Router

### Backend Functions:
* Get all keys (ids)
axios.get('https://vibecheck-please.herokuapp.com/playlists')

* Get all playlists in JSON
axios.get('https://vibecheck-please.herokuapp.com/playlists/all')

* Get a certain playlist by ID
axios.get('https://vibecheck-please.herokuapp.com/playlists/:id')

* Post a new playlist to the backend
await axios({
    method: 'POST', 
    url: 'https://vibecheck-please.herokuapp.com/playlists',
    body: {
        username: '', <---- Spotify username
        tracks: []   <----- Array of track IDs in playlist
    }
})

* Edit a playlist in the backend, must pass in the id of playlist you are editing
await axios({
    method: 'PUT', 
    url: 'https://vibecheck-please.herokuapp.com/playlists/:id',
    body: {
        username: '', <---- Spotify username
        tracks: []   <----- Array of track IDs in playlist
    }
})

* Delete a playlist in the backend
axios.delete('https://vibecheck-please.herokuapp.com/playlists/:id')

### Backend Use
- Display the three most recently 'vibified' playlists on our home page with playlist album cover
- Display the spotify username that created these playlists
- "Click" on playlist will redirect user to spotify.com where they can listen to playlist

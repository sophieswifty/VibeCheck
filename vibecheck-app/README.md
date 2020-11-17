# Vibecheck
#### Generate custom playlists to match your vibe, gain insights into your listening habits, and more!

## Developer Notes:
* Npm install the following packages:
    * bulma,
    * react,
    * react-router,
    * react-bulma-components,
    * axios
    * font-awesome (use: `npm install --save @fortawesome/fontawesome-free`)

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
  
  * Tools (if we get to this)
      - Vibecheck a song
      - Vibecheck a playlist
   
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
      
   * Log out button
   
  ### Design Patterns:
  * `useEffect()` and `useState()` from React
  * React Context (see: https://reactjs.org/docs/context.html and https://medium.com/better-programming/building-basic-react-authentication-e20a574d5e71)

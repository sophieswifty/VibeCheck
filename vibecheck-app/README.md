# Welcome to the VibeCheck website!
### Generate custom playlists to match your vibe, gain insights into your listening habits, and more!

## Developer Notes:
* Npm install the following packages:
    * bulma,
    * react,
    * react-router,
    * *react-bulma-components,
    * axios

* To run in browser: `npm start` (browser-sync no longer needed)

* Project organization:
    * `public/`
        * `index.html`
        * `style.css`

    * `src/` for - you guessed it - source code
        * `API/` for api functions
        * `assets/` for pictures, media, misc.
        * `components/` for UI components of the site
        * `pages/` houses each page of the site as a React component
        * `util/` any helper (utility) functions, classes, enums, etc.
        * `index.js` renders the React components in the html using the querySelector
        * `App.js` creates the entire app with React components

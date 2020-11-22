/*
0 - branch from here
1-10 - party
11-20 - study
21-30 - exercise
31-40 -vibes
*/

let questions = [
    {
        index: 0,
        questionText: "What are you doing?",
        answerOptions: [
            // accousticness: 0.05
            // accousticness range: 0.05
            // danceability: 0.8
            // danceability range: 0.2
            // energy: 0.8
            // energy range: 0.2
            // instrumentalness: 0.2
            // instrumentalness range: 0.2
            // speechiness: 0.33
            // speechiness range: 0.33
            // valence: 0.7
            // valence range: 0.3
            { answerText: "Getting turnt", answerImage: 'q1_party.jpeg', nextIndex: 1, metric: 'energy_high', value: 1 },
            // accousticness: 0.6
            // accousticness range: 0.4
            // danceability: 0.1
            // danceability range: 0.1
            // energy: 0.25
            // energy range: 0.25
            // instrumentalness: 0.5
            // instrumentalness range: 0.5
            // speechiness: 0.2
            // speechiness range: 0.2
            // valence: 0.5
            // valence range: 0.15
            { answerText: "Study mode", answerImage: 'q1_study.jpeg',  nextIndex: 11, metric: 'energy_low', value: -0.5 },
            // accousticness: 0.05
            // accousticness range: 0.05
            // danceability: 0.8
            // danceability range: 0.2
            // energy: 0.8
            // energy range: 0.2
            // instrumentalness: 0.2
            // instrumentalness range: 0.2
            // speechiness: 0.33
            // speechiness range: 0.33
            // valence: 0.8
            // valence range: 0.2
            { answerText: "Healthicizing", answerImage: 'q1_run.jpeg',  nextIndex: 21, metric: 'energy_high', value: 1.5  },
            // accousticness: 0.25
            // accousticness range: 0.25
            // danceability: 0.2
            // danceability range: 0.2
            // energy: 0.2
            // energy range: 0.2
            // instrumentalness: 0.4
            // instrumentalness range: 0.4
            // speechiness: 0.33
            // speechiness range: 0.33
            // valence: 0.3
            // valence range: 0.3
            { answerText: "Just vibing.", answerImage: 'q1_vibes.jpeg',  nextIndex: 31, metric: 'energy_low', value: -1  },
        ]

    },

    {
        index: 1,
        questionText: "Are you feeling...",
        answerOptions: [
            { answerText: "Smooth", answerImage: 'q1_party.jpeg', nextIndex: 2, metric: 'energy_high', value: 1 },
            { answerText: "Glitter", answerImage: 'q1_study.jpeg', nextIndex: 2, metric: 'energy_high', value: 1 },
            { answerText: "Wood", answerImage: 'q1_run.jpeg', nextIndex: 2, metric: 'energy_high', value: 1 },
            { answerText: "Concrete", answerImage: 'q1_vibes.jpeg', nextIndex: 2, metric: 'energy_high', value: 1 },
        ],
    },

    {
        index: 2,
        nextIndex: 3,
        questionText: "How many people are with you?",
        answerOptions: [
            { answerText: "Just me.", answerImage: 'q1_party.jpeg', nextIndex: 1, metric: 'energy_high', value: 1 },
            { answerText: "1-3", answerImage: 'q1_study.jpeg'},
            { answerText: "4-9", answerImage: 'q1_run.jpeg' },
            { answerText: "Over 10", answerImage: 'q1_vibes.jpeg' },
        ],
    },
    {
        index: 3,
        nextIndex: 4,
        questionText: "Pick a destination of choice.",
        answerOptions: [
            { answerText: "Berlin", answerImage: 'q1_party.jpeg'},
            { answerText: "Rio de Janeiro", answerImage: 'q1_study.jpeg'},
            { answerText: "Los Angeles", answerImage: 'q1_study.jpeg'},
            { answerText: "Tokyo", answerImage: 'q1_study.jpeg'},
         
        ],
    },
    {
        index: 4,
        nextIndex: 5,
        questionText: "How are you feeling?",
        answerOptions: [
            { answerText: "Chaotic", answerImage: 'q1_party.jpeg'},
            { answerText: "Loved", answerImage: 'q1_study.jpeg'},
            { answerText: "Nostalgic", answerImage: 'q1_study.jpeg'},
            { answerText: "Hot.", answerImage: 'q1_study.jpeg'},
         
        ],
    },
    {
        index: 5,
        nextIndex: 6,
        questionText: "Pick a cereal.",
        answerOptions: [
            { answerText: "Fruit loops", answerImage: 'q1_party.jpeg'},
            { answerText: "Cheerios", answerImage: 'q1_study.jpeg'},
            { answerText: "Honey Bunches of Oats", answerImage: 'q1_study.jpeg'},
            { answerText: "Cinnamon Toast Crunch", answerImage: 'q1_study.jpeg'},
         
        ],
    },
    {
        index: 6,
        nextIndex: 7,
        questionText: "What font do you jive with?",
        answerOptions: [
            { answerText: "Comic Sans", answerImage: 'q1_party.jpeg'},
            { answerText: "Impact", answerImage: 'q1_study.jpeg'},
            { answerText: "Consolas", answerImage: 'q1_study.jpeg'},
            { answerText: "Helvetica", answerImage: 'q1_study.jpeg'},
         
        ],
    },
    {
        index: 7,
        nextIndex: 8,
        questionText: "Are you outside or inside?",
        answerOptions: [
            { answerText: "Inside", answerImage: 'q1_party.jpeg'},
            { answerText: "Outside", answerImage: 'q1_study.jpeg'},
        ],
    },
    {
        index: 8,
        nextIndex: 9,
        questionText: "Pick a duck.",
        answerOptions: [
            { answerText: "DUck", answerImage: 'q1_party.jpeg'},
            { answerText: "DUCK", answerImage: 'q1_study.jpeg'},
            { answerText: "dUCK", answerImage: 'q1_party.jpeg'},
            { answerText: "dUCk", answerImage: 'q1_study.jpeg'},
        
        ],
    },
    {
        index: 9,
        nextIndex: 10,
        questionText: "Favorite part of a song.",
        answerOptions: [
            { answerText: "Catchy chorus", answerImage: 'q1_party.jpeg'},
            { answerText: "Unexpected beat drop", answerImage: 'q1_study.jpeg'},
            { answerText: "Meaningful lyrics", answerImage: 'q1_party.jpeg'},
            { answerText: "Head-boppin' baseline", answerImage: 'q1_study.jpeg'},
        
        ],
    },
    {
        index: 10,
        nextIndex: 11,
        questionText: "WILDCARD?",
        answerOptions: [
            { answerText: "Yes?", answerImage: 'q1_party.jpeg'},
            { answerText: "Not right now.", answerImage: 'q1_study.jpeg'},
        ],
    },
    {
        index: 11,
        nextIndex: 12,
        questionText: "How are you studying?",
        answerOptions: [
            { answerText: "In a group", answerImage: 'https://images.unsplash.com/photo-1460518451285-97b6aa326961?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'}, // up: energy, danceability, valence
            { answerText: "By myself", answerImage: 'https://images.unsplash.com/photo-1593698054469-2bb6fdf4b512?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'},
        ],
    },
    {
        index: 12,
        nextIndex: 13,
        questionText: "Pick a candy.",
        answerOptions: [
            { answerText: "Skittles", answerImage: 'https://media2.s-nbcnews.com/j/newscms/2018_04/1313196/skittles_flavors_180125_tease_34a2498693efe14b41f71f464d96cc33.social_share_1200x630_center.jpg'},
            { answerText: "Kit-Kat", answerImage: 'https://www.hersheys.com/content/dam/smartlabelproductsimage/kitkat/00034000002467-0010.png'},
            { answerText: "Snickers", answerImage: 'https://images.heb.com/is/image/HEBGrocery/000121400'},
            { answerText: "Nerds", answerImage: 'https://images-na.ssl-images-amazon.com/images/I/81b37Ux9IbL._SX466_.jpg'},
        ],
    },
    {
        index: 13,
        nextIndex: 14,
        questionText: "What subject are you studying?",
        answerOptions: [
            { answerText: "Humanities", answerImage: 'https://s3.amazonaws.com/photos.bcheights.com/wp-content/uploads/2019/09/03123633/opinions-36.png'},
            { answerText: "STEM", answerImage: 'https://www.iberdrola.com/wcorp/gc/prod/en_US/comunicacion/profesionales_stem_1_res/STEM_gris_746x419.jpg'},
            { answerText: "Art", answerImage: 'https://stvp-static-prod.s3.amazonaws.com/uploads/sites/2/2016/08/eCorner_Arts_Tech5.jpg'},
            { answerText: "Other", answerImage: 'https://cdn.shoplightspeed.com/shops/610593/files/2916194/mystery-box-mystery-box-7500.jpg'},
        ],
    },
    {
        index: 14,
        nextIndex: 15,
        questionText: "What is your dream vacation spot?",
        answerOptions: [
            { answerText: "Tanning in the Bahamas", answerImage: 'https://www.travelweekly.com/uploadedImages/All_TW_Art/2020/0727/T0102BAHAMAS_JUNKAROO_HR.jpg?n=5999&width=1540&height=866&mode=crop&Anchor=MiddleCenter'},
            { answerText: "Skiing in the Alps", answerImage: 'https://www.worldatlas.com/upload/2a/cc/96/alps-mountain-range-europe.jpg'},
            { answerText: "Sightseeing in Tokyo", answerImage: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/4b/5d/10/caption.jpg?w=500&h=300&s=1&cx=1005&cy=690&chk=v1_2ed86f729380ea073850'},
            { answerText: "Road tripping across America", answerImage: 'https://s3.amazonaws.com/fathom_media/photos/usa-cross-country-road-trip-route-6-main.jpg.1200x800_q85_crop.jpg'},
        ],
    },
    {
        index: 15,
        nextIndex: 16,
        questionText: "Will you pass your next test?",
        answerOptions: [
            { answerText: "Of course", answerImage: 'https://img.jakpost.net/c/2017/11/30/2017_11_30_36667_1512028887._large.jpg'},
            { answerText: "Probably not", answerImage: 'https://i.imgur.com/FXLThSZ.jpg'},
            { answerText: "I don't care", answerImage: 'https://somersetsentinel.com/wp-content/uploads/2018/04/apathy-900x596.png'},
            { answerText: "Oh god I hope so", answerImage: 'https://our.warwick.ac.uk/wp-content/uploads/2020/01/existential.jpeg'},
        ],
    },
    {
        index: 16,
        nextIndex: 17,
        questionText: "Pick a game show",
        answerOptions: [
            { answerText: "Family Feud", answerImage: 'q1_party.jpeg'},
            { answerText: "Wheel of Fortune", answerImage: 'q1_study.jpeg'},
            { answerText: "The Price is Right", answerImage: 'q1_study.jpeg'},
            { answerText: "Jeopardy", answerImage: 'q1_study.jpeg'},
        ],
    },
    {
        index: 17,
        nextIndex: 18,
        questionText: "Where do you study best?",
        answerOptions: [
            { answerText: "In my room", answerImage: 'https://www.timeshighereducation.com/sites/default/files/styles/the_breaking_news_image_style/public/istock-1093929298.jpg?itok=-ASwUBzQ'},
            { answerText: "At the library", answerImage: 'https://cdn7.dissolve.com/p/D1061_242_525/D1061_242_525_1200.jpg'},
            { answerText: "In front of the tv", answerImage: 'https://theenrichery.com/wp-content/uploads/2018/01/Distractions.jpg'},
            { answerText: "In a sunny park", answerImage: 'https://www.faulkner.edu/wp-content/uploads/studying-in-the-park.jpg'},
        ],
    },
    {
        index: 18,
        nextIndex: 19,
        questionText: "Choose a word",
        answerOptions: [
            { answerText: "Fortitude", answerImage: 'q1_party.jpeg'},
            { answerText: "Smorgasbord", answerImage: 'q1_study.jpeg'},
            { answerText: "Bump", answerImage: 'q1_study.jpeg'},
            { answerText: "Fantasia", answerImage: 'q1_study.jpeg'},
        ],
    },
    {
        index: 19,
        nextIndex: 20,
        questionText: "Describe your grades.",
        answerOptions: [
            { answerText: "Straightest A's", answerImage: 'q1_party.jpeg'},
            { answerText: "Could be worse", answerImage: 'q1_study.jpeg'},
            { answerText: "Pass/failing the class", answerImage: 'q1_study.jpeg'},
            { answerText: "Dropping out", answerImage: 'q1_study.jpeg'},
        ],
    },
    {
        index: 20,
        nextIndex: null,
        questionText: "Finally, pick a direction",
        answerOptions: [
            { answerText: "North", answerImage: 'q1_party.jpeg'},
            { answerText: "East", answerImage: 'q1_study.jpeg'},
            { answerText: "South", answerImage: 'q1_study.jpeg'},
            { answerText: "West", answerImage: 'q1_study.jpeg'},
        ],
    },
    {
        index: 21,
        questionText: "Is this a group or solo workout sesh?",
        answerOptions: [
            { answerText: "Solo", answerImage: 'solo+workout.jpg', nextIndex: 22, metric: 'energy', value: .5},
            { answerText: "Group", answerImage: 'groupWork.jpg', nextIndex: 22, metric: 'danceability', value: .8},
        ],
    },
    {
        index: 22,
        questionText: "What kind of exercise are you doing?",
        answerOptions: [
            { answerText: "Cardio", answerImage: 'cardio.jpg',   nextIndex: 23, metric: 'danceability', value: .9 },
            { answerText: "Lifting weights", answerImage: 'groupWork.jpg',   nextIndex: 23, metric: 'energy', value: .6 },
            { answerText: "Yoga", answerImage: 'yoga.jpg',   nextIndex: 23,metric: 'acousticness', value: .7 },
            { answerText: "Just walking", answerImage: 'walking.jpg',   nextIndex: 23, metric: 'danceability', value: .5 },
        ],
    },
    {
        index: 23,
        questionText: "Do you need motivation for the exercise?",
        answerOptions: [
            { answerText: "PLEASE", answerImage: 'yeah.jpg',  nextIndex: 24, metric: 'energy', value: .7 },
            { answerText: "Nah, I love to exercise!", answerImage: 'nah.jpg',  nextIndex: 24, metric: 'danceability', value: .7 },
            { answerText: "Maybe a little", answerImage: 'little.jpg',  nextIndex: 24, metric: 'danceability', value: .6 },
        ],
    },
    {
        index: 24,
        questionText: "Pick your favorite post workout pick me up",
        answerOptions: [
            { answerText: "Gatorade", answerImage: 'gatorade.jpg', nextIndex: 25, metric: 'danceability', value: .8 },
            { answerText: "Water, water, water!", answerImage: 'water.jpg', nextIndex: 25, metric: 'tempo', value: 99 },
            { answerText: "Something Sweet", answerImage: 'sweet.jpg', nextIndex: 25, metric: 'danceability', value: .8 },
            { answerText: "SALT", answerImage: 'salt.jpg', nextIndex: 25, metric: 'tempo', value: 97},
        ],
    },
    {
        index: 25,
        questionText: "What color describes your mood right now?",
        answerOptions: [
            { answerText: "Red", answerImage: 'red.png', nextIndex: 26, metric: 'danceability', value: .9},
            { answerText: "Yellow", answerImage: 'yellow.png', nextIndex: 26, metric: 'danceability', value: .8 },
            { answerText: "Blue", answerImage: 'blue.png', nextIndex: 26, metric: 'acousticness', value: .6 },
            { answerText: "Green", answerImage: 'green.png', nextIndex: 26, metric: 'energy', value: .5 },
        ],
    },
    {
        index: 26,
        questionText: "How do you take your coffee?",
        answerOptions: [
            { answerText: "Black", answerImage: 'blackC.jpg',  nextIndex: 27, metric: 'danceability', value: .8 },
            { answerText: "With a splash of cream", answerImage: 'cream.jpg',  nextIndex: 27, metric: 'danceability', value: .6 },
            { answerText: "The more sugar, the better", answerImage: 'sweetC.jpg',  nextIndex: 27, metric: 'danceability', value: .8 },
            { answerText: "Coffee? Where's the tea?", answerImage: 'tea.jpg',  nextIndex: 27, metric: 'danceability', value: .5 },
        ],
    },
    {
        index: 27,
        nextIndex: 28,
        questionText: "What's your go-to shoe when you're not exercising?",
        answerOptions: [
            { answerText: "Tennis shoes", answerImage: 'tennis.jpg',  nextIndex: 28, metric: 'energy', value: .7 },
            { answerText: "Heels", answerImage: 'heels.jpg',  nextIndex: 28, metric: 'time_signature', value: 4 },
            { answerText: "Flip Flops", answerImage: 'flipflop.jpeg',  nextIndex: 28, metric: 'acousticness', value: .5 },
            { answerText: "Shoes? Barefoot for sure", answerImage: 'barefoot.jpg',  nextIndex: 28, metric: 'danceability', value: .8 },
        ],
    },
    {
        index: 28,
        questionText: "Pick a cereal.",
        answerOptions: [
            { answerText: "Fruit loops", answerImage: 'fruitloops.jpg', nextIndex: 29, metric: 'danceability', value: .8 },
            { answerText: "Cheerios", answerImage: 'cheerios.jpg', nextIndex: 29, metric: 'acousticness', value: .6 },
            { answerText: "Honey Bunches of Oats", answerImage: 'hboa.jpeg', nextIndex: 29, metric: 'danceability', value: .5 },
            { answerText: "Cinnamon Toast Crunch", answerImage: 'ctc.jpg', nextIndex: 29, metric: 'danceability', value: .8 },
        ],
    },
    {
        index: 29,
        questionText: "If you got to rename your WiFi, which one would you pick?",
        answerOptions: [
            { answerText: "MySpectrumWiFib7-5G", answerImage: 'wifi.jpg', nextIndex: 30, metric: 'danceability', value: .8 },
            { answerText: "Bill Wi, the Science Fi", answerImage: 'wifi.jpg', nextIndex: 30, metric: 'energy', value: .6 },
            { answerText: "Clever Wifi Name", answerImage: 'wifi.jpg', nextIndex: 30, metric: 'danceability', value: .6 },
            { answerText: "Drop It Like It's Hotspot", answerImage: 'wifi.jpg', nextIndex: 30, metric: 'energy', value: .7 },
         
        ],
    },
    {
        index: 30,
        questionText: "And finally, how do you feel about pineapple on pizza?",
        answerOptions: [
            { answerText: "Ew!", answerImage: 'noPonP.jpeg', nextIndex: null, metric: 'danceability', value: .6 },
            { answerText: "Delicious!", answerImage: 'yesPonP.png', nextIndex: null, metric: 'danceability', value: .8 },
            { answerText: "I'm the only person on the planet who doesn't have an opinion on this.", nextIndex: null, answerImage: 'dontcarePonP.png', metric: 'danceability', value: .6 },
        ],
    },

];

export default questions;
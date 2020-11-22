import { q1_run
} from './q1_run.jpeg';
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
            { answerText: "Getting turnt", answerImage: 'q1_party.jpeg', nextIndex: 1, metric: 'energy_high', value: 1 },
            { answerText: "Study mode", answerImage: 'q1_study.jpeg',  nextIndex: 11, metric: 'energy_low', value: -0.5 },
            { answerText: "Healthicizing", answerImage: 'q1_run.jpeg',  nextIndex: 21, metric: 'energy_high', value: 1.5  },
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
            { answerText: "In a group", answerImage: 'https://images.unsplash.com/photo-1460518451285-97b6aa326961?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'},
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
            { answerText: "Humanities", answerImage: 'q1_party.jpeg'},
            { answerText: "STEM", answerImage: 'q1_study.jpeg'},
            { answerText: "Art", answerImage: 'q1_party.jpeg'},
            { answerText: "Other", answerImage: 'q1_study.jpeg'},
        ],
    },
    {
        index: 14,
        nextIndex: 15,
        questionText: "What is your dream vacation spot?",
        answerOptions: [
            { answerText: "Tanning in the Bahamas", answerImage: 'q1_party.jpeg'},
            { answerText: "Skiing in the Alps", answerImage: 'q1_study.jpeg'},
            { answerText: "Sightseeing in Tokyo", answerImage: 'q1_study.jpeg'},
            { answerText: "Road tripping across America", answerImage: 'q1_study.jpeg'},
        ],
    },
    {
        index: 15,
        nextIndex: 16,
        questionText: "Will you pass your next test?",
        answerOptions: [
            { answerText: "Of course", answerImage: 'q1_party.jpeg'},
            { answerText: "Probably not", answerImage: 'q1_study.jpeg'},
            { answerText: "I don't care", answerImage: 'q1_study.jpeg'},
            { answerText: "Oh god I hope so", answerImage: 'q1_study.jpeg'},
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
            { answerText: "In my room", answerImage: 'q1_party.jpeg'},
            { answerText: "At the library", answerImage: 'q1_study.jpeg'},
            { answerText: "In front of the tv", answerImage: 'q1_study.jpeg'},
            { answerText: "In a sunny park", answerImage: 'q1_study.jpeg'},
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
        nextIndex: 22,
        questionText: "Is this a group or solo workout sesh?",
        answerOptions: [
            { answerText: "Solo", answerImage: 'solo+workout.jpg', metric: 'energy', value: .5},
            { answerText: "Group", answerImage: 'groupWork.jpg', metric: 'danceability', value: .8},
        ],
    },
    {
        index: 22,
        nextIndex: 23,
        questionText: "What kind of exercise are you doing?",
        answerOptions: [
            { answerText: "Cardio", answerImage: 'cardio.jpg', metric: 'danceability', value: .9 },
            { answerText: "Lifting weights", answerImage: 'groupWork.jpg', metric: 'energy', value: .6 },
            { answerText: "Yoga", answerImage: 'yoga.jpg', metric: 'acousticness', value: .7 },
            { answerText: "Just walking", answerImage: 'walking.jpg', metric: 'danceability', value: .5 },
        ],
    },
    {
        index: 23,
        nextIndex: 24,
        questionText: "Do you need motivation for the exercise?",
        answerOptions: [
            { answerText: "PLEASE", answerImage: 'yeah.jpg', metric: 'energy', value: .7 },
            { answerText: "Nah, I love to exercise!", answerImage: 'nah.jpg', metric: 'danceability', value: .7 },
            { answerText: "Maybe a little", answerImage: 'little.jpg', metric: 'danceability', value: .6 },
        ],
    },
    {
        index: 24,
        nextIndex: 25,
        questionText: "Pick your favorite post workout pick me up",
        answerOptions: [
            { answerText: "Gatorade", answerImage: 'gatorade.jpg', metric: 'danceability', value: .8 },
            { answerText: "Water, water, water!", answerImage: 'water.jpg', metric: 'tempo', value: 99 },
            { answerText: "Something Sweet", answerImage: 'sweet.jpg', metric: 'danceability', value: .8 },
            { answerText: "SALT", answerImage: 'salt.jpg', metric: 'tempo', value: 97},
        ],
    },
    {
        index: 25,
        nextIndex: 26,
        questionText: "What color describes your mood right now?",
        answerOptions: [
            { answerText: "Red", answerImage: 'red.png', metric: 'danceability', value: .9},
            { answerText: "Yellow", answerImage: 'yellow.png', metric: 'danceability', value: .8 },
            { answerText: "Blue", answerImage: 'blue.png', metric: 'acousticness', value: .6 },
            { answerText: "Green", answerImage: 'green.png', metric: 'energy', value: .5 },
        ],
    },
    {
        index: 26,
        nextIndex: 27,
        questionText: "How do you take your coffee?",
        answerOptions: [
            { answerText: "Black", answerImage: 'blackC.jpg', metric: 'danceability', value: .8 },
            { answerText: "With a splash of cream", answerImage: 'cream.jpg', metric: 'danceability', value: .6 },
            { answerText: "The more sugar, the better", answerImage: 'sweetC.jpg', metric: 'danceability', value: .8 },
            { answerText: "Coffee? Where's the tea?", answerImage: 'tea.jpg', metric: 'danceability', value: .5 },
        ],
    },
    {
        index: 27,
        nextIndex: 28,
        questionText: "What's your go-to shoe when you're not exercising?",
        answerOptions: [
            { answerText: "Tennis shoes", answerImage: 'tennis.jpg', metric: 'energy', value: .7 },
            { answerText: "Heels", answerImage: 'heels.jpg', metric: 'time_signature', value: 4 },
            { answerText: "Flip Flops", answerImage: 'flipflop.jpeg', metric: 'acousticness', value: .5 },
            { answerText: "Shoes? Barefoot for sure", answerImage: 'barefoor.jpg', metric: 'danceability', value: .8 },
        ],
    },
    {
        index: 28,
        nextIndex: 29,
        questionText: "Pick a cereal.",
        answerOptions: [
            { answerText: "Fruit loops", answerImage: 'fruitloops.jpg', metric: 'danceability', value: .8 },
            { answerText: "Cheerios", answerImage: 'cheerios.jpg', metric: 'acousticness', value: .6 },
            { answerText: "Honey Bunches of Oats", answerImage: 'hboa.jpeg', metric: 'danceability', value: .5 },
            { answerText: "Cinnamon Toast Crunch", answerImage: 'ctc.jpg', metric: 'danceability', value: .8 },
        ],
    },
    {
        index: 29,
        nextIndex: 30,
        questionText: "If you got to rename your WiFi, which one would you pick?",
        answerOptions: [
            { answerText: "MySpectrumWiFib7-5G", answerImage: 'wifi.jpg', metric: 'danceability', value: .8 },
            { answerText: "Bill Wi, the Science Fi", answerImage: 'wifi.jpg', metric: 'energy', value: .6 },
            { answerText: "Clever Wifi Name", answerImage: 'wifi.jpg', metric: 'danceability', value: .6 },
            { answerText: "Drop It Like It's Hotspot", answerImage: 'wifi.jpg', metric: 'energy', value: .7 },
         
        ],
    },
    {
        index: 30,
        nextIndex: null,
        questionText: "And finally, how do you feel about pineapple on pizza?",
        answerOptions: [
            { answerText: "Ew!", answerImage: 'noPonP.jpeg', metric: 'danceability', value: .6 },
            { answerText: "Delicious!", answerImage: 'yesPonP.png', metric: 'danceability', value: .8 },
            { answerText: "I'm the only person on the planet who doesn't have an opinion on this.", answerImage: 'dontcarePonP.png', metric: 'danceability', value: .6 },
        ],
    },
    {
        index: 41,
        nextIndex: 42,
        questionText: "Use your location?",
        answerOptions: [
            { answerText: "Yes", answerImage: 'q1_party.jpeg'},
            { answerText: "No", answerImage: 'q1_study.jpeg'},
        ],
    },
    {
        index: 12,
        nextIndex: 13,
        questionText: "Use the weather?",
        answerOptions: [
            { answerText: "Yes", answerImage: 'q1_party.jpeg'},
            { answerText: "No", answerImage: 'q1_study.jpeg'},
        ],
    },
    {
        index: 13,
        nextIndex: 14,
        questionText: "Use the time?",
        answerOptions: [
            { answerText: "Yes", answerImage: 'q1_party.jpeg'},
            { answerText: "No", answerImage: 'q1_study.jpeg'},
        ],
    },
    {
        index: 14,
        nextIndex: null,
        questionText: "Use the time?",
        answerOptions: [
            { answerText: "Yes", answerImage: 'q1_party.jpeg'},
            { answerText: "No", answerImage: 'q1_study.jpeg'},
        ],
    },

];

export default questions;
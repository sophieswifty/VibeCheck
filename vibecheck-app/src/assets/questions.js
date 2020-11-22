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
            { answerText: "Just me.", answerImage: 'q1_party.jpeg', nextIndex: 3, metric: 'energy_high', value: 1 },
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
            { answerText: "In a group", answerImage: 'q1_party.jpeg'},
            { answerText: "By myself", answerImage: 'q1_study.jpeg'},
        ],
    },
    {
        index: 12,
        nextIndex: 13,
        questionText: "Pick a candy.",
        answerOptions: [
            { answerText: "Skittles", answerImage: 'q1_party.jpeg'},
            { answerText: "Kit-Kat", answerImage: 'q1_study.jpeg'},
            { answerText: "Snickers", answerImage: 'q1_study.jpeg'},
            { answerText: "Nerds", answerImage: 'q1_study.jpeg'},
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
        index: 41,
        nextIndex: 42,
        questionText: "Use your location?",
        answerOptions: [
            { answerText: "Yes", answerImage: 'q1_party.jpeg'},
            { answerText: "No", answerImage: 'q1_study.jpeg'},
        ],
    },
    {
        index: 42,
        nextIndex: 43,
        questionText: "Use the weather?",
        answerOptions: [
            { answerText: "Yes", answerImage: 'q1_party.jpeg'},
            { answerText: "No", answerImage: 'q1_study.jpeg'},
        ],
    },
    {
        index: 43,
        nextIndex: 44,
        questionText: "Use the time?",
        answerOptions: [
            { answerText: "Yes", answerImage: 'q1_party.jpeg'},
            { answerText: "No", answerImage: 'q1_study.jpeg'},
        ],
    },
    {
        index: 44,
        nextIndex: null,
        questionText: "Use the time?",
        answerOptions: [
            { answerText: "Yes", answerImage: 'q1_party.jpeg'},
            { answerText: "No", answerImage: 'q1_study.jpeg'},
        ],
    },

];

export default questions;
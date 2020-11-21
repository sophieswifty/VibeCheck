import { q1_run
} from './q1_run.jpeg';
/*

0 - branch from here
1-10 - turnt questions
11-13 - shared questions abt api
14-24 - study questions
25-35 -exercise questions
36-46 - vibing questions

*/

let questions = [
    {
        index: 0,
        questionText: "What are you doing?",
        answerOptions: [
            { answerText: "Getting turnt", answerImage: 'q1_party.jpeg', nextIndex: 1, metric: 'energy_high', value: 1 },
            { answerText: "Study mode", answerImage: 'q1_study.jpeg',  nextIndex: 14, metric: 'energy_low', value: -0.5 },
            { answerText: "Healthicizing", answerImage: 'q1_run.jpeg',  nextIndex: 14, metric: 'energy_high', value: 1.5  },
            { answerText: "Just vibing.", answerImage: 'q1_vibes.jpeg',  nextIndex: 14, metric: 'energy_low', value: -1  },
        ],

    },

    {
        index: 1,
        nextIndex: 2,
        questionText: "Are you feeling...",
        answerOptions: [
            { answerText: "Smooth", answerImage: 'q1_party.jpeg'},
            { answerText: "Glitter", answerImage: 'q1_study.jpeg'},
            { answerText: "Wood", answerImage: 'q1_run.jpeg' },
            { answerText: "Concrete", answerImage: 'q1_vibes.jpeg' },
        ],
    },

    {
        index: 2,
        nextIndex: 3,
        questionText: "How many people are with you?",
        answerOptions: [
            { answerText: "Just me.", answerImage: 'q1_party.jpeg'},
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
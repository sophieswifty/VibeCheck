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
    // acousticness: 0.15
    // acousticness range: 0.15
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
    { answerText: "Getting turnt", answerImage: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80', nextIndex: 1, metric: 'energy', value: 0 },
    // acousticness: 0.6
    // acousticness range: 0.4
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
    { answerText: "Study mode", answerImage: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80', nextIndex: 11, metric: 'energy', value: 0 },
    // acousticness: 0.05
    // acousticness range: 0.05
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
    { answerText: "Exercising", answerImage: 'https://images.unsplash.com/photo-1527933053326-89d1746b76b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80', nextIndex: 21, metric: 'energy', value: 0 },
    // acousticness: 0.25
    // acousticness range: 0.25
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
    { answerText: "Just vibing.", answerImage: 'https://images.unsplash.com/photo-1498892156743-6d5da30bab8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80', nextIndex: 31, metric: 'energy', value: 0 },
    ]
    
    },
    
    {
    index: 1,
    questionText: "Which party would you attend?",
    answerOptions: [
    { answerText: "The office party", answerImage: 'https://valetcoffee.com/wp-content/uploads/2019/12/Office-Party-Ideas-that-dont-suck-Northern-Kentucky-Cincinnati.jpeg', nextIndex: 2, metric: 'danceability', value: -0.4 },
    { answerText: "The house show", answerImage: 'https://images.unsplash.com/photo-1508171254668-090b66f22108?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aG91c2UlMjBwYXJ0eXxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=600&q=60', nextIndex: 2, metric: 'danceability', value: .15 },
    { answerText: "Mr. Gatsby's", answerImage: 'https://media.newyorker.com/photos/59095192019dfc3494e9daf2/16:9/w_1280,c_limit/the-great-gatsby-party-580.jpg', nextIndex: 2, metric: 'danceability', value: -0.2 },
    { answerText: "EDM concert", answerImage: 'https://imagez.tmz.com/image/de/1by1/2019/11/21/de7cb7de7e964052b624773a4cfc4463_xl.jpg', nextIndex: 2, metric: 'danceability', value: .3 },
    ],
    },
    
    {
    index: 2,
    questionText: "How many people are with you?",
    answerOptions: [
    { answerText: "Just me.", answerImage: 'https://upload.wikimedia.org/wikipedia/commons/8/82/ONE-Logo.png', nextIndex: 3, metric: 'energy', value: -.2 },
    { answerText: "1-3", answerImage: 'https://ak.picdn.net/shutterstock/videos/1038515267/thumb/10.jpg', nextIndex: 3, metric: 'energy', value: -0.1 },
    { answerText: "4-9", answerImage: 'https://bs-toys.com/wp-content/uploads/4.png', nextIndex: 3, metric: 'energy', value: .1 },
    { answerText: "Over 10", answerImage: 'https://www.the-faith.com/wp-content/uploads/2015/04/10-hadiths-about-women-.jpg', nextIndex: 3, metric: 'energy', value: .2  },
    ],
    },
    {
    index: 3,
    questionText: "Pick a destination of choice.",
    answerOptions: [
    { answerText: "Berlin", answerImage: 'https://images.unsplash.com/photo-1528728329032-2972f65dfb3f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8YmVybGlufGVufDB8fDB8&auto=format&fit=crop&w=1000&q=60',  nextIndex: 4, metric: 'energy', value: .05 },
    { answerText: "Rio de Janeiro", answerImage: 'https://images.unsplash.com/photo-1589394760151-b4c9890765fe?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cmlvfGVufDB8fDB8&auto=format&fit=crop&w=1000&q=60',   nextIndex: 4, metric: 'acousticness_range', value:  .1 },
    { answerText: "Bali", answerImage: 'https://images.unsplash.com/photo-1515896769750-31548aa180ed?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bG9zJTIwYW5nZWxlc3xlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=1000&q=60',   nextIndex: 4, metric: 'energy', value: -.2 },
    { answerText: "Tokyo", answerImage: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8dG9reW98ZW58MHx8MHw%3D&auto=format&fit=crop&w=1000&q=60',   nextIndex: 4, metric: 'energy_range', value: -.05 },
    ],
    },
    {
    index: 4,
    nextIndex: 5,
    questionText: "How are you feeling?",
    answerOptions: [
    { answerText: "Chaotic", answerImage: 'https://images.unsplash.com/photo-1571289868918-f1deff2f7219?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c3BsYXR0ZXIlMjBwYWludHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=1000&q=60', nextIndex: 5, metric: 'instrumentalness', value: -.1 },
    { answerText: "Loved", answerImage: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aGVhcnRzfGVufDB8fDB8&auto=format&fit=crop&w=1000&q=60', nextIndex: 5, metric: 'valence_range', value: .05 },
    { answerText: "Nostalgic", answerImage: 'https://images.unsplash.com/photo-1511090141963-54adba30c2d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=926&q=80', nextIndex: 5, metric: 'valence', value: -.2 },
    { answerText: "Hot.", answerImage: 'https://us.123rf.com/450wm/nanakokoshka/nanakokoshka1904/nanakokoshka190400055/122679880-stock-vector-vector-illustration-of-womans-girl-red-lipstick-kiss-mark-isolated-on-white-background-valentines-da.jpg?ver=6', nextIndex: 5, metric: 'energy_range', value: .05 },
    ],
    },
    {
    index: 5,
    questionText: "Drink of choice?",
    answerOptions: [
    { answerText: "Margarita", answerImage: 'https://images.unsplash.com/photo-1556855810-ac404aa91e85?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjl8fG1hcmdhcml0YXxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=1000&q=60',nextIndex: 6, metric: 'valence', value: .05 },
    { answerText: "G&T", answerImage: 'https://images.unsplash.com/photo-1598509679475-bb4fa54cfeda?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2luJTIwYW5kJTIwdG9uaWN8ZW58MHx8MHw%3D&auto=format&fit=crop&w=1000&q=60',nextIndex: 6, metric: 'valence', value: -.15 },
    { answerText: "Whiteclaw", answerImage: 'https://www.thespiritsbusiness.com/content/http://www.thespiritsbusiness.com/media/2020/05/White-Claw.jpg', nextIndex: 6, metric: 'energy_range', value: -.05 },
    { answerText: "PBR", answerImage: 'https://i5.walmartimages.com/asr/b1ada15a-b8db-4b78-bc04-4f48af6da156_1.b3a099d5d7f075a530d1358965570a43.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff', nextIndex: 6, metric: 'acousticness_range', value: .05 },
    ],
    },
    {
    index: 6,
    questionText: "What font do you jive with?",
    answerOptions: [
    { answerText: "Comic Sans", answerImage: 'https://assets.change.org/photos/8/oz/vq/pjoZVQPonIIkiRD-1600x900-noPad.jpg?1556080920', nextIndex: 7, metric: 'valence', value: .05 },
    { answerText: "Impact", answerImage: 'https://freefontsfamily.com/wp-content/uploads/2019/11/Impact-font-free.jpg', nextIndex: 7, metric: 'danceability', value: -.15 },
    { answerText: "Consolas", answerImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/ConsolasSP.svg/1200px-ConsolasSP.svg.png', nextIndex: 7, metric: 'energy', value: -.1 },
    { answerText: "Helvetica", answerImage: 'https://cdn.freefontsfamily.com/wp-content/uploads/2019/04/Helvetica-Font-1.jpg', nextIndex: 7, metric: 'valence_range', value: .05 },
    ],
    },
    {
    index: 7,
    questionText: "Who's your plus one?",
    answerOptions: [
    { answerText: "Post Malone", answerImage: 'https://imagez.tmz.com/image/de/1by1/2019/11/21/de7cb7de7e964052b624773a4cfc4463_xl.jpg', nextIndex: 8, metric: 'energy', value: 0.5},
    { answerText: "Michelle Obama", answerImage: 'https://thumbor.forbes.com/thumbor/711x559/https://blogs-images.forbes.com/anneglusker/files/2018/12/Michelle-Obama-book-cover-shot-e1544143689487-1200x944.jpg?width=960', nextIndex: 8, metric: 'valence', value: 0.5},
    { answerText: "John Mulaney", answerImage: 'https://www.insidehook.com/wp-content/uploads/2020/11/mulaney-snl.jpg?fit=1200%2C675', nextIndex: 8, metric: 'danceability', value: 0.5},
    { answerText: "Beyonce", answerImage: 'https://www.news4jax.com/resizer/mutSFf2yvwH5J44J5XvR_1WVIQ0=/1280x720/smart/filters:format(jpeg):strip_exif(true):strip_icc(true):no_upscale(true):quality(65)/cloudfront-us-east-1.images.arcpublishing.com/gmg/BUOMEP42VVCGLCCC235AQLLOOQ.jpg', nextIndex: 8, metric: 'energy_range', value: 0.5},
    ],
    },
    {
    index: 8,
    questionText: "Pick a duck.",
    answerOptions: [
    { answerText: "DUck", answerImage: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/943ea12e-b329-422a-8221-584934d9e570/d990vhn-e49b64a8-7705-4110-9387-a50e587ea3a3.jpg/v1/fill/w_900,h_900,q_75,strp/silly_duck_by_kittenfairy_d990vhn-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD05MDAiLCJwYXRoIjoiXC9mXC85NDNlYTEyZS1iMzI5LTQyMmEtODIyMS01ODQ5MzRkOWU1NzBcL2Q5OTB2aG4tZTQ5YjY0YTgtNzcwNS00MTEwLTkzODctYTUwZTU4N2VhM2EzLmpwZyIsIndpZHRoIjoiPD05MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.q7IgrpQykqwXKruLDXj9ipNopIJH8Mmd04GZ2JKFiwg', nextIndex: 9, metric: 'valence', value: 0.5},
    { answerText: "duCK", answerImage: 'https://ae01.alicdn.com/kf/H6b466a63550c44ac8c2751666a488049v.jpg', nextIndex: 9, metric: 'danceability', value: 0.5},
    { answerText: "dUCk", answerImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmF0F9ilFaGesRtUH4GvFr_uiZJSQSitDtvA&usqp=CAU', nextIndex: 9, metric: 'energy', value: 0.5},
    { answerText: "DUCK", answerImage: 'https://www.treehugger.com/thmb/ZDV1Pz1NKlIeYrKYBI50nyrVQio=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__treehugger__images__2017__06__giant_rubber_duck-b87f93575c254bfb93e1423527a6b6c2.png', nextIndex: 9, metric: 'danceability', value: 0.5},
    ],
    },
    {
    index: 9,
    questionText: "Favorite part of a song.",
    answerOptions: [
    { answerText: "Catchy chorus", answerImage: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c29uZ3xlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60', nextIndex: 10, metric: 'valence', value: 0.5},
    { answerText: "Unexpected beat drop", answerImage: 'https://images.unsplash.com/photo-1591557184386-e0e124abe0be?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8dGVjaG5vfGVufDB8fDB8&auto=format&fit=crop&w=500&q=60', nextIndex: 10, metric: 'energy', value: 0.5},
    { answerText: "Meaningful lyrics", answerImage: 'https://images.unsplash.com/photo-1520454125516-134a66d9bf78?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fHNvbmd8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60', nextIndex: 10, metric: 'acousticness', value: 0.5},
    { answerText: "Head-boppin' baseline", answerImage: 'https://images.unsplash.com/photo-1583944000409-00dd0ba1a873?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTV8fHNvbmd8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60', nextIndex: 10, metric: 'danceability', value: 0.5},
    ],
    },
    {
    index: 10,
    questionText: "Which animal is your spirit party animal?",
    answerOptions: [
    { answerText: "Party Pug Pete", answerImage: 'https://images.unsplash.com/photo-1566674717261-e3b344428702?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8cGFydHklMjBhbmltYWx8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60', nextIndex: null, metric: 'energy', value: 0.5},
    { answerText: "Drunk Dog Doug", answerImage: 'https://lefunny.net/wp-content/uploads/2014/05/Funny-party-animals-picture.jpg', nextIndex: null, metric: 'danceability', value: 0.5},
    { answerText: "Overdressed Orangutan Olive", answerImage: 'https://www.geburtszeit.com/wp-content/uploads/2018/11/49e7fb54ee689124c46865fce2586e20.jpeg', nextIndex: null, metric: 'valence', value: 0.5},
    { answerText: "Refined Rex", answerImage: 'https://blog.yellowoctopus.com.au/wp-content/uploads/2017/06/yellow-octopus-party-time-meme-2.jpg', nextIndex: null, metric: 'energy_range', value: -0.5},
    ],
    },
    {
    index: 11,
    questionText: "How are you studying?",
    answerOptions: [
    { answerText: "In a group", answerImage: 'https://images.unsplash.com/photo-1460518451285-97b6aa326961?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80', nextIndex: 12, metric: 'valence', value: 0.2},
    { answerText: "By myself", answerImage: 'https://images.unsplash.com/photo-1593698054469-2bb6fdf4b512?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80', nextIndex: 12, metric: 'acousticness', value: 0.1 },
    ],
    },
    {
    index: 12,
    questionText: "Pick a candy.",
    answerOptions: [
    { answerText: "Skittles", answerImage: 'https://media2.s-nbcnews.com/j/newscms/2018_04/1313196/skittles_flavors_180125_tease_34a2498693efe14b41f71f464d96cc33.social_share_1200x630_center.jpg', nextIndex: 13, metric: 'valence', value: 0.05 },
    { answerText: "Kit-Kat", answerImage: 'https://www.hersheys.com/content/dam/smartlabelproductsimage/kitkat/00034000002467-0010.png', nextIndex: 13, metric: 'energy', value: 0.05 },
    { answerText: "Snickers", answerImage: 'https://images.heb.com/is/image/HEBGrocery/000121400', nextIndex: 13, metric: 'energy', value: -0.05 },
    { answerText: "Nerds", answerImage: 'https://images-na.ssl-images-amazon.com/images/I/81b37Ux9IbL._SX466_.jpg', nextIndex: 13, metric: 'danceability', value: 0.05 },
    ],
    },
    {
    index: 13,
    questionText: "What subject are you studying?",
    answerOptions: [
    { answerText: "Humanities", answerImage: 'https://s3.amazonaws.com/photos.bcheights.com/wp-content/uploads/2019/09/03123633/opinions-36.png', nextIndex: 14, metric: 'acousticness', value: 0.05 },
    { answerText: "STEM", answerImage: 'https://www.iberdrola.com/wcorp/gc/prod/en_US/comunicacion/profesionales_stem_1_res/STEM_gris_746x419.jpg', nextIndex: 14, metric: 'acousticness', value: -0.05 },
    { answerText: "Art", answerImage: 'https://stvp-static-prod.s3.amazonaws.com/uploads/sites/2/2016/08/eCorner_Arts_Tech5.jpg', nextIndex: 14, metric: 'acousticness', value: 0.05 },
    { answerText: "Other", answerImage: 'https://cdn.shoplightspeed.com/shops/610593/files/2916194/mystery-box-mystery-box-7500.jpg', nextIndex: 14, metric: 'valence', value: 0.05 },
    ],
    },
    {
    index: 14,
    questionText: "What is your dream vacation spot?",
    answerOptions: [
    { answerText: "Tanning in the Bahamas", answerImage: 'https://www.travelweekly.com/uploadedImages/All_TW_Art/2020/0727/T0102BAHAMAS_JUNKAROO_HR.jpg?n=5999&width=1540&height=866&mode=crop&Anchor=MiddleCenter', nextIndex: 15, metric: 'energy', value: -0.05 },
    { answerText: "Skiing in the Alps", answerImage: 'https://www.worldatlas.com/upload/2a/cc/96/alps-mountain-range-europe.jpg', nextIndex: 15, metric: 'energy', value: 0.05 },
    { answerText: "Sightseeing in Tokyo", answerImage: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/4b/5d/10/caption.jpg?w=500&h=300&s=1&cx=1005&cy=690&chk=v1_2ed86f729380ea073850', nextIndex: 15, metric: 'danceability', value: 0.05 },
    { answerText: "Road tripping across America", answerImage: 'https://s3.amazonaws.com/fathom_media/photos/usa-cross-country-road-trip-route-6-main.jpg.1200x800_q85_crop.jpg', nextIndex: 15, metric: 'valence', value: 0.05 },
    ],
    },
    {
    index: 15,
    questionText: "Will you pass your next test?",
    answerOptions: [
    { answerText: "Of course", answerImage: 'https://img.jakpost.net/c/2017/11/30/2017_11_30_36667_1512028887._large.jpg', nextIndex: 16, metric: 'valence', value: 0.05 },
    { answerText: "Probably not", answerImage: 'https://i.imgur.com/FXLThSZ.jpg', nextIndex: 16, metric: 'speechiness', value: 0.05 },
    { answerText: "I don't care", answerImage: 'https://somersetsentinel.com/wp-content/uploads/2018/04/apathy-900x596.png', nextIndex: 16, metric: 'energy', value: 0.05 },
    { answerText: "Oh god I hope so", answerImage: 'https://our.warwick.ac.uk/wp-content/uploads/2020/01/existential.jpeg', nextIndex: 16, metric: 'acousticness', value: 0.05 },
    ],
    },
    {
    index: 16,
    questionText: "Pick a game show",
    answerOptions: [
    { answerText: "Family Feud", answerImage: 'https://brooklyneagle.com/wp-content/uploads/2019/01/Brooklyn-Family-Feud.jpg', nextIndex: 17, metric: 'danceability', value: 0.05 },
    { answerText: "Wheel of Fortune", answerImage: 'https://azbigmedia.com/wp-content/uploads/2020/03/wheel-of-fortune.jpg', nextIndex: 17, metric: 'energy', value: -0.05 },
    { answerText: "The Price is Right", answerImage: 'https://m.media-amazon.com/images/M/MV5BNWY5NjYzMDUtNzAzOS00M2VhLWE4YzEtMTM3OTljZDA2MTIxXkEyXkFqcGdeQXVyODg3NDc1OTE@._V1_.jpg', nextIndex: 17, metric: 'valence', value: 0.05 },
    { answerText: "Jeopardy", answerImage: 'https://www.nydailynews.com/resizer/YWlAIFwc66-T4KisccpRCF5XCI8=/1200x0/top/cloudfront-us-east-1.images.arcpublishing.com/tronc/QQDDBTD2CSFCHCEVNSPVBU2MZY.aspx', nextIndex: 17, metric: 'speechiness', value: 0.05 },
    ],
    },
    {
    index: 17,
    questionText: "Where do you study best?",
    answerOptions: [
    { answerText: "In my room", answerImage: 'https://www.timeshighereducation.com/sites/default/files/styles/the_breaking_news_image_style/public/istock-1093929298.jpg?itok=-ASwUBzQ', nextIndex: 18, metric: 'energy', value: -0.05 },
    { answerText: "At the library", answerImage: 'https://cdn7.dissolve.com/p/D1061_242_525/D1061_242_525_1200.jpg', nextIndex: 18, metric: 'danceability', value: -0.05 },
    { answerText: "In front of the tv", answerImage: 'https://theenrichery.com/wp-content/uploads/2018/01/Distractions.jpg', nextIndex: 18, metric: 'acousticness', value: -0.05 },
    { answerText: "In a sunny park", answerImage: 'https://www.faulkner.edu/wp-content/uploads/studying-in-the-park.jpg', nextIndex: 18, metric: 'energy', value: 0.05 },
    ],
    },
    {
    index: 18,
    questionText: "Choose a word",
    answerOptions: [
    { answerText: "Fortitude", answerImage: 'https://images.takeshape.io/eec0d9cd-dc81-4ba8-ac20-50da147f43d2/dev/d630aa84-9e25-4afb-8c98-3ce6735fedc5/TLK-PRINT-USE-013_DP_0040_comp_v0703_right_SRGB.1145%20(1).jpg?auto=compress%2Cformat', nextIndex: 19, metric: 'speechiness', value: 0.05 },
    { answerText: "Smorgasbord", answerImage: 'https://i2.wp.com/www.culturallyours.com/wp-content/uploads/2019/06/CulturallyOurs-How-to-build-a-swedish-summer-Sm%C3%B6rg%C3%A5sbord-for-your-next-outdoor-picnic-2.jpg?resize=1000%2C667&ssl=1', nextIndex: 19, metric: 'danceability', value: 0.05 },
    { answerText: "Bump", answerImage: 'https://tt0dl1563d22haik02ol9k9a-wpengine.netdna-ssl.com/wp-content/uploads/2018/03/bump-in-the-road.png', nextIndex: 19, metric: 'energy', value: 0.1 },
    { answerText: "Fantasia", answerImage: 'https://photos.prnewswire.com/prnfull/20151104/283870', nextIndex: 19, metric: 'valence', value: 0.05 },
    ],
    },
    {
    index: 19,
    questionText: "Describe your grades.",
    answerOptions: [
    { answerText: "Straightest A's", answerImage: 'https://www.thecollegefix.com/wp-content/uploads/2018/08/grades.reportcard_AlexMillos_Shutterstock-370x242.jpg', nextIndex: 20, metric: 'danceability', value: -0.05 },
    { answerText: "Could be worse", answerImage: 'https://www.wikihow.com/images/thumb/0/0a/Deal-With-a-B-as-a-Straight-A-Student-Step-1.jpg/v4-460px-Deal-With-a-B-as-a-Straight-A-Student-Step-1.jpg.webp', nextIndex: 20, metric: 'speechiness', value: -0.05 },
    { answerText: "Pass/failing the class", answerImage: 'https://www.uopeople.edu/wp-content/uploads/2020/01/Do-Pass-Fail-Classes-Affect-Your-GPA-What-You-Need-to-Know-300x224.jpg', nextIndex: 20, metric: 'danceability', value: 0.05 },
    { answerText: "Dropping out", answerImage: 'https://images.ctfassets.net/81iqaqpfd8fy/4nFGj4lrV6Su44CWSAA6C6/0a4980c7adfc2d6bf0c0f899a03d9933/high_school_dropout.jpg?h=620&w=1440', nextIndex: 20, metric: 'energy', value: 0.05 },
    ],
    },
    {
    index: 20,
    questionText: "Finally, pick a direction.",
    answerOptions: [
    { answerText: "North", answerImage: 'https://cdn0.iconfinder.com/data/icons/weather-forecast-meteorology/256/weather-nature-forecast-meteorology_149-512.png', nextIndex: null, metric: 'energy', value: 0.05 },
    { answerText: "East", answerImage: 'https://cdn0.iconfinder.com/data/icons/weather-forecast-meteorology/256/weather-nature-forecast-meteorology_153-512.png', nextIndex: null, metric: 'valence', value: 0.05 },
    { answerText: "South", answerImage: 'https://cdn0.iconfinder.com/data/icons/weather-forecast-meteorology/256/weather-nature-forecast-meteorology_152-512.png', nextIndex: null, metric: 'energy', value: -0.05 },
    { answerText: "West", answerImage: 'https://cdn0.iconfinder.com/data/icons/weather-forecast-meteorology/256/weather-nature-forecast-meteorology_150-512.png', nextIndex: null, metric: 'valence', value: -0.05 },
    ],
    },
    {
        index: 21,
        questionText: "Is this a group or solo workout sesh?",
        answerOptions: [
            { answerText: "Solo", answerImage: 'https://shapinup.com/wp-content/uploads/2017/10/IMG_8468.jpg', nextIndex: 22, metric: 'energy', value: .05},
            { answerText: "Group", answerImage: 'https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Z3JvdXAlMjBleGVyY2lzZXxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=1000&q=60', nextIndex: 22, metric: 'valence', value: .1},
        ],
    },
    {
        index: 22,
        questionText: "What kind of exercise are you doing?",
        answerOptions: [
            { answerText: "Cardio", answerImage: 'https://images.unsplash.com/photo-1571008887538-b36bb32f4571?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cnVubmluZ3xlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=1000&q=60',   nextIndex: 23, metric: 'danceability', value: .1 },
            { answerText: "Lifting weights", answerImage: 'https://images.unsplash.com/photo-1520948013839-62020f374478?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8bGlmdGluZyUyMHdlaWdodHN8ZW58MHx8MHw%3D&auto=format&fit=crop&w=1000&q=60',   nextIndex: 23, metric: 'energy', value: .05 },
            { answerText: "Yoga", answerImage: 'https://images.unsplash.com/photo-1575052814074-c05122e0a17a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8Y2FyZGlvfGVufDB8fDB8&auto=format&fit=crop&w=1000&q=60',   nextIndex: 23,metric: 'acousticness', value: .1 },
            { answerText: "Just walking", answerImage: 'https://images.unsplash.com/photo-1494959764136-6be9eb3c261e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8d2Fsa2luZ3xlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=1000&q=60',   nextIndex: 23, metric: 'danceability', value: -.05 },
        ],
    },
    {
        index: 23,
        questionText: "Do you need motivation for the exercise?",
        answerOptions: [
            { answerText: "PLEASE", answerImage: 'https://images.unsplash.com/photo-1580893211123-627e0262be3a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8dGh1bWJzJTIwdXB8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60',  nextIndex: 24, metric: 'energy', value: .1 },
            { answerText: "Nah, I love to exercise!", answerImage: 'https://images.unsplash.com/photo-1596057176846-4dfa9a53c9ba?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8dGh1bWJzJTIwZG93bnxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60',  nextIndex: 24, metric: 'danceability', value: .05 },
            { answerText: "Maybe a little", answerImage: 'https://images.unsplash.com/photo-1556711905-4bd1b6603275?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fG1vdGl2YXRpb258ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60',  nextIndex: 24, metric: 'danceability', value: .05 },
        ],
    },
    {
        index: 24,
        questionText: "Pick your favorite post workout pick me up",
        answerOptions: [
            { answerText: "Gatorade", answerImage: 'https://images.unsplash.com/photo-1525397053281-a37d8a2ff7ce?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Z2F0b3JhZGV8ZW58MHx8MHw%3D&auto=format&fit=crop&w=1000&q=60', nextIndex: 25, metric: 'danceability', value: .05 },
            { answerText: "Water, water, water!", answerImage: 'https://images.unsplash.com/photo-1519873174361-37788c5a73c7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8d2F0ZXJ8ZW58MHx8MHw%3D&auto=format&fit=crop&w=1000&q=60', nextIndex: 25, metric: 'valence', value: .05 },
            { answerText: "Something Sweet", answerImage: 'https://images.unsplash.com/photo-1506224477000-07aa8a76be20?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8c3dlZXR8ZW58MHx8MHw%3D&auto=format&fit=crop&w=1000&q=60', nextIndex: 25, metric: 'danceability', value: .1 },
            { answerText: "SALT", answerImage: 'https://images.unsplash.com/photo-1484009902830-a314db11070c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8c2FsdHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=1000&q=60', nextIndex: 25, metric: 'energy', value: .05 },
        ],
    },
    {
        index: 25,
        questionText: "What color describes your mood right now?",
        answerOptions: [
            { answerText: "Red", answerImage: 'https://images.unsplash.com/photo-1535868463750-c78d9543614f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cmVkfGVufDB8fDB8&auto=format&fit=crop&w=1000&q=60', nextIndex: 26, metric: 'danceability', value: .1 },
            { answerText: "Yellow", answerImage: 'https://images.unsplash.com/photo-1521913626209-0fbf68f4c4b1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8eWVsbG93fGVufDB8fDB8&auto=format&fit=crop&w=1000&q=60', nextIndex: 26, metric: 'danceability', value: .05 },
            { answerText: "Blue", answerImage: 'https://images.unsplash.com/photo-1530533718754-001d2668365a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8Ymx1ZXxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=1000&q=60', nextIndex: 26, metric: 'acousticness', value: .05 },
            { answerText: "Green", answerImage: 'https://images.unsplash.com/photo-1543362906-acfc16c67564?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTd8fGdyZWVufGVufDB8fDB8&auto=format&fit=crop&w=1000&q=60', nextIndex: 26, metric: 'energy', value: .05 },
        ],
    },
    {
        index: 26,
        questionText: "How do you take your coffee?",
        answerOptions: [
            { answerText: "Black", answerImage: 'https://images.unsplash.com/photo-1422207258071-70754198c4a2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YmxhY2slMjBjb2ZmZWV8ZW58MHx8MHw%3D&auto=format&fit=crop&w=1000&q=60',  nextIndex: 27, metric: 'danceability', value: .05 },
            { answerText: "With a splash of cream", answerImage: 'https://images.unsplash.com/photo-1541161284823-be8c6571a945?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29mZmVlJTIwd2l0aCUyMGNyZWFtfGVufDB8fDB8&auto=format&fit=crop&w=1000&q=60',  nextIndex: 27, metric: 'danceability', value: -.05 },
            { answerText: "The more sugar, the better", answerImage: 'https://images.unsplash.com/photo-1589396575653-c09c794ff6a6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y29mZmVlJTIwd2l0aCUyMGNyZWFtfGVufDB8fDB8&auto=format&fit=crop&w=1000&q=60',  nextIndex: 27, metric: 'danceability', value: .05 },
            { answerText: "Coffee? Where's the tea?", answerImage: 'https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8dGVhfGVufDB8fDB8&auto=format&fit=crop&w=1000&q=60',  nextIndex: 27, metric: 'energy', value: -.05 },
        ],
    },
    {
        index: 27,
        nextIndex: 28,
        questionText: "What's your go-to shoe when you're not exercising?",
        answerOptions: [
            { answerText: "Tennis shoes", answerImage: 'https://images.unsplash.com/photo-1546824034-b86974ff36f9?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8dGVubmlzJTIwc2hvZXN8ZW58MHx8MHw%3D&auto=format&fit=crop&w=1000&q=60',  nextIndex: 28, metric: 'energy', value: .05 },
            { answerText: "Heels", answerImage: 'https://images.unsplash.com/photo-1553545985-1e0d8781d5db?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aGVlbHN8ZW58MHx8MHw%3D&auto=format&fit=crop&w=1000&q=60',  nextIndex: 28, metric: 'valence', value: .05 },
            { answerText: "Flip Flops", answerImage: 'https://images.unsplash.com/photo-1562454590-3ca6df2d87d5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8ZmxpcCUyMGZsb3BzfGVufDB8fDB8&auto=format&fit=crop&w=1000&q=60',  nextIndex: 28, metric: 'acousticness', value: 0.5 },
            { answerText: "Shoes? Barefoot for sure", answerImage: 'https://images.unsplash.com/photo-1580091150791-bf43c05a64df?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFyZWZvb3R8ZW58MHx8MHw%3D&auto=format&fit=crop&w=1000&q=60',  nextIndex: 28, metric: 'valence', value: .05 },
        ],
    },
    {
        index: 28,
        questionText: "Pick a cereal.",
        answerOptions: [
            { answerText: "Fruit loops", answerImage: 'https://images.unsplash.com/photo-1504308805006-0f7a5f1f0f71?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJ1aXQlMjBsb29wc3xlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=1000&q=60', nextIndex: 29, metric: 'danceability', value: .05 },
            { answerText: "Cheerios", answerImage: 'https://images.unsplash.com/photo-1470909752008-c78c7f6423a3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8Y2hlZXJpb3N8ZW58MHx8MHw%3D&auto=format&fit=crop&w=1000&q=60', nextIndex: 29, metric: 'acousticness', value: .05 },
            { answerText: "Honey Bunches of Oats", answerImage: 'https://www.cerealously.net/wp-content/uploads/2020/01/new-frosted-honey-bunches-of-oats-review-cereal.jpg', nextIndex: 29, metric: 'danceability', value: -.05 },
            { answerText: "Cinnamon Toast Crunch", answerImage: 'https://images-gmi-pmc.edge-generalmills.com/593f6d6d-1f89-464e-afed-cd97971d9938.jpg', nextIndex: 29, metric: 'danceability', value: .05 },
        ],
    },
    {
        index: 29,
        questionText: "If you got to rename your WiFi, which one would you pick?",
        answerOptions: [
            { answerText: "MySpectrumWiFib7-5G", answerImage: 'https://images.unsplash.com/photo-1600238454024-bc8c1e49caba?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fHdpZml8ZW58MHx8MHw%3D&auto=format&fit=crop&w=1000&q=60', nextIndex: 30, metric: 'danceability', value: -.05 },
            { answerText: "Bill Wi, the Science Fi", answerImage: 'https://images.unsplash.com/photo-1526411116157-21b2b172c6bc?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8d2lmaXxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=1000&q=60', nextIndex: 30, metric: 'danceability', value: .05 },
            { answerText: "Clever Wifi Name", answerImage: 'https://images.unsplash.com/photo-1563168206-f0f627c83ca8?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8d2lmaXxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=1000&q=60', nextIndex: 30, metric: 'danceability', value: -.05 },
            { answerText: "Drop It Like It's Hotspot", answerImage: 'https://m.hindustantimes.com/rf/image_size_1200x900/HT/p2/2020/08/30/Pictures/_0085d26c-eaa0-11ea-b0d0-732c2aa3f4c8.PNG', nextIndex: 30, metric: 'energy', value: .06 },
         
        ],
    },
    {
        index: 30,
        questionText: "And finally, how do you feel about pineapple on pizza?",
        answerOptions: [
            { answerText: "Ew!", answerImage: 'https://elhstalon.net/wp-content/uploads/2017/05/Pineapple.jpg', nextIndex: null, metric: 'danceability', value: .03 },
            { answerText: "Delicious!", answerImage: 'https://cdn.drawception.com/images/panels/2017/4-15/r3fQaGdFAw-2.png', nextIndex: null, metric: 'danceability', value: .02 },
            { answerText: "No comment.", nextIndex: null, answerImage: 'https://pics.me.me/reactions-to-pineapple-pizza-be-careful-boys-its-hot-eeew-39919178.png', metric: 'danceability', value: .02 },
        ],
    },
    {
        index: 31,
        questionText: "Is this a group or solo chill sesh?",
        answerOptions: [
            { answerText: "Solo", answerImage: 'https://images.unsplash.com/photo-1471560090527-d1af5e4e6eb6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpbGx8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60', nextIndex: 32, metric: 'valence', value: .05},
            { answerText: "Group", answerImage: 'https://images.unsplash.com/photo-1520127877998-122c33e8eb38?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpbGwlMjBncm91cHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60', nextIndex: 32, metric: 'valence', value: .1},
        ],
    },
    {
        index: 32,
        questionText: "Describe your current vibe (pre-vibecheck).",
        answerOptions: [
            { answerText: "Chaotic", answerImage: 'https://images.unsplash.com/photo-1603880920705-3fcc96d6e602?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8Y2hhb3N8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60',   nextIndex: 33, metric: 'acousticness', value: .5 },
            { answerText: "Content :-)", answerImage: 'https://images.unsplash.com/photo-1525072124541-6237cc05f4f7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cmVsYXhlZHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60',   nextIndex: 33, metric: 'danceability', value: .05 },
            { answerText: "Eh, somewhere in the middle", answerImage: 'https://images.unsplash.com/photo-1560270579-d515a443eb3b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29uZnVzZWR8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60',   nextIndex: 33, metric: 'energy', value: -.15 },
            { answerText: "Excited!", answerImage: 'https://images.unsplash.com/photo-1593186194428-1dd5be6ade2c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',   nextIndex: 33, metric: 'energy', value: .05 },
        ],
    },
    {
        index: 33,
        questionText: "Are you in your feels?",
        answerOptions: [
            { answerText: "Yes", answerImage: 'https://images.unsplash.com/photo-1525120334885-38cc03a6ec77?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8c2FkfGVufDB8fDB8&auto=format&fit=crop&w=500&q=60',  nextIndex: 34, metric: 'valence', value: -.1 },
            { answerText: "Nah, I'm good.", answerImage: 'https://images.unsplash.com/photo-1581539030295-a92e2872b9ac?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8b2theXxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60',  nextIndex: 34, metric: 'valence', value: .05 },
            { answerText: "Yeah, okay...maybe a little", answerImage: 'https://images.unsplash.com/photo-1453227588063-bb302b62f50b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8c2FkfGVufDB8fDB8&auto=format&fit=crop&w=500&q=60',  nextIndex: 34, metric: 'valence', value: -.05 },
        ],
    },
    {
        index: 34,
        questionText: "Pick your favorite hangout snack",
        answerOptions: [
            { answerText: "Popcorn", answerImage: 'https://images.unsplash.com/photo-1578849278619-e73505e9610f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cG9wY29ybnxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60', nextIndex: 35, metric: 'danceability', value: .05 },
            { answerText: "Gummy Bears", answerImage: 'https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8Z3VtbXklMjBiZWFyfGVufDB8fDB8&auto=format&fit=crop&w=500&q=60', nextIndex: 35, metric: 'valence', value: .05 },
            { answerText: "Cookies", answerImage: 'https://images.unsplash.com/photo-1571165841024-2ce92069301d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8Y29va2llc3xlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60', nextIndex: 35, metric: 'danceability', value: .05 },
            { answerText: "Pretzels", answerImage: 'https://images.unsplash.com/photo-1589621317486-84ba62eb6706?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8cHJldHplbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60', nextIndex: 35, metric: 'energy', value: .05 },
        ],
    },
    {
        index: 35,
        questionText: "What color describes your mood right now?",
        answerOptions: [
            { answerText: "Red", answerImage: 'https://images.unsplash.com/photo-1535868463750-c78d9543614f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cmVkfGVufDB8fDB8&auto=format&fit=crop&w=1000&q=60', nextIndex: 36, metric: 'danceability', value: .05 },
            { answerText: "Yellow", answerImage: 'https://images.unsplash.com/photo-1521913626209-0fbf68f4c4b1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8eWVsbG93fGVufDB8fDB8&auto=format&fit=crop&w=1000&q=60', nextIndex: 36, metric: 'valence', value: .05 },
            { answerText: "Blue", answerImage: 'https://images.unsplash.com/photo-1530533718754-001d2668365a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8Ymx1ZXxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=1000&q=60', nextIndex: 36, metric: 'acousticness', value: .05 },
            { answerText: "Green", answerImage: 'https://images.unsplash.com/photo-1543362906-acfc16c67564?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTd8fGdyZWVufGVufDB8fDB8&auto=format&fit=crop&w=1000&q=60', nextIndex: 36, metric: 'energy', value: .05 },
        ],
    },
    {
        index: 36,
        questionText: "What kind of shows are you into?",
        answerOptions: [
            { answerText: "Thriller or Adventure", answerImage: 'https://images.unsplash.com/photo-1547469447-4afec158715b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8YWR2ZW50dXJlfGVufDB8fDB8&auto=format&fit=crop&w=500&q=60',  nextIndex: 37, metric: 'danceability', value: .05 },
            { answerText: "Comedy", answerImage: 'https://images.unsplash.com/photo-1507808973436-a4ed7b5e87c9?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVubnl8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60',  nextIndex: 37, metric: 'valence', value: .05 },
            { answerText: "Romantic", answerImage: 'https://images.unsplash.com/photo-1516967124798-10656f7dca28?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8bG92ZXxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60',  nextIndex: 37, metric: 'acousticness', value: .05 },
            { answerText: "Drama or Horror", answerImage: 'https://images.unsplash.com/photo-1518898053858-dcb49207fb75?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTl8fHNjYXJ5fGVufDB8fDB8&auto=format&fit=crop&w=500&q=60',  nextIndex: 37, metric: 'energy', value: -.05 },
        ],
    },
    {
        index: 37,
        questionText: "How many pillows are on your bed?",
        answerOptions: [
            { answerText: "One, why would I have more?", answerImage: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjR8fG9uZSUyMHBpbGxvd3xlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60',  nextIndex: 38, metric: 'energy', value: .05 },
            { answerText: "2-4, a few extra never hurt.", answerImage: 'https://images.unsplash.com/photo-1583860312136-35dc71739c79?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzR8fG9uZSUyMHBpbGxvd3xlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60',  nextIndex: 38, metric: 'energy', value: .05 },
            { answerText: "Over 5 - I love to snuggle!", answerImage: 'https://images.unsplash.com/photo-1554745006-8b25b7aeb7cb?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fHNudWdnbGV8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60',  nextIndex: 38, metric: 'acousticness', value: 0.5 },
            { answerText: "Do I need to count ALL of them?", answerImage: 'https://images.unsplash.com/photo-1596984768919-e51f75123a13?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTd8fG9uZSUyMHBpbGxvd3xlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60',  nextIndex: 38, metric: 'valence', value: .05 },
        ],
    },
    {
        index: 38,
        questionText: "Morning Person or Night Owl?",
        answerOptions: [
            { answerText: "Morning Person", answerImage: 'https://images.unsplash.com/photo-1489533119213-66a5cd877091?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9ybmluZ3xlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60', nextIndex: 39, metric: 'valence', value: .05 },
            { answerText: "Night Owl", answerImage: 'https://images.unsplash.com/photo-1479267658415-ff274a213280?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fG5pZ2h0fGVufDB8fDB8&auto=format&fit=crop&w=500&q=60', nextIndex: 39, metric: 'acousticness', value: .05 },
        ],
    },
    {
        index: 39,
        questionText: "If you got to rename your WiFi, which one would you pick?",
        answerOptions: [
            { answerText: "MySpectrumWiFib7-5G", answerImage: 'https://images.unsplash.com/photo-1600238454024-bc8c1e49caba?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fHdpZml8ZW58MHx8MHw%3D&auto=format&fit=crop&w=1000&q=60', nextIndex: 40, metric: 'danceability', value: -.05 },
            { answerText: "Bill Wi, the Science Fi", answerImage: 'https://images.unsplash.com/photo-1526411116157-21b2b172c6bc?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8d2lmaXxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=1000&q=60', nextIndex: 40, metric: 'danceability', value: .05 },
            { answerText: "Clever Wifi Name", answerImage: 'https://images.unsplash.com/photo-1563168206-f0f627c83ca8?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8d2lmaXxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=1000&q=60', nextIndex: 40, metric: 'energy', value: .05 },
            { answerText: "Drop It Like It's Hotspot", answerImage: 'https://m.hindustantimes.com/rf/image_size_1200x900/HT/p2/2020/08/30/Pictures/_0085d26c-eaa0-11ea-b0d0-732c2aa3f4c8.PNG', nextIndex: 40, metric: 'valence', value: .05 },
         
        ],
    },
    {
        index: 40,
        questionText: "And finally, how long would you last in a zombie apocalypse?",
        answerOptions: [
            { answerText: "Serve 'em my brain on a platter", answerImage: 'https://images.unsplash.com/photo-1568283661163-c90193fd13f1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8ZGVhdGh8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60', nextIndex: null, metric: 'acousticness', value: .05 },
            { answerText: "Definitely not the first to go...", answerImage: 'https://images.unsplash.com/photo-1503925802536-c9451dcd87b5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8em9tYmllfGVufDB8fDB8&auto=format&fit=crop&w=500&q=60', nextIndex: null, metric: 'valence', value: .05 },
            { answerText: "Honestly, I'd probably survive.", answerImage: 'https://images.unsplash.com/photo-1573216145940-0bc9e583d768?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTl8fHpvbWJpZXxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60', nextIndex: null, metric: 'danceability', value: .05 },
            { answerText: "Last. Person. Standing.", answerImage: 'https://images.unsplash.com/photo-1490668219599-a79d4d90cf66?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjd8fGRlYXRofGVufDB8fDB8&auto=format&fit=crop&w=500&q=60', nextIndex: null, metric: 'energy', value: .05 },

        ],
    },
];

export default questions;
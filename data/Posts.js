import { Users } from "./Users";

export const Posts = [
    {
        imageUrl: require('../images/landscape.png'),
        id: Users[0].id,
        user: Users[0].user,
        likes: 135,
        caption: 'More vacations like these. ⛰️ ',
        profile_picture: Users[0].image,
        comments: [
            {
                user: 'anna.shevchenko',
                comment: 'Beautiful! You really know your stuff 😍 '
            },
            {
                user: 'lorrie.travel',
                comment: 'Amazing picture! Would you like to be advertised by us?'
            },
        ],
    },
    {
        imageUrl: require('../images/lost-in-thought.png'),
        user: Users[5].user,
        likes: 68,
        caption: 'Getting lost in my thoughts.',
        profile_picture: Users[5].image,
        comments: [
            {
                user: 'Josh_peg27',
                comment: 'Bruh, you look like you are high on drugs. Cool pic though!'
            },
        ],
    },
]
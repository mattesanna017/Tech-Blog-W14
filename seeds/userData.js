const { User } = require('../models');

const users = [
    {
        'username': 'Matteo95',
        'password': 'password01' 
    },
    {
        'username': 'MarcoPhoenix',
        'password': 'password02'
    },
    {
        'username': 'JozuDiamonds',
        'password': 'password03'
    }
];

const seedUser = () => User.bulkCreate(users, {
    individualHooks: true,
    returning: true,
});

module.exports = seedUser;
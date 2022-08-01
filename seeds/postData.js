const { Post } = require('../models');

const posts = [
    {
        'post_title': 'MVC',
        'post_body': 'Writing about tech can be just as important as making it. Developers spend plenty of time creating new applications and debugging existing codebases, but most developers also spend at least some of their time reading and writing about technical concepts, recent advancements, and new technologies.!',
        'user_id': 1
    },
    {
        'post_title': 'node modules',
        'post_body': ' Modules are the blocks of encapsulated code that communicates with an external application on the basis of their related functionality. Modules can be a single file or a collection of multiples files/folders',
        'user_id': 2
    },
    {
        'post_title': 'controllers',
        'post_body': ' functions that separate out the code to route requests from the code that actually processes requests',
        'user_id': 3
    }
];

const seedPost = () => Post.bulkCreate(posts);

module.exports = seedPost;
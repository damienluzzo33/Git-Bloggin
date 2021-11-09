//*  import the comment model
const { Comment } = require('../models');

//* Create example/seed data set for the example comment data
const commentData = [
  {
    comment_body: "Wow. This post really helped me with a student I've been tutoring. Thanks for sharing!",
    date_created: "October 31, 2021",
    user_id: 2,
    thread_id: 1,
  },
  {
    comment_body: "Yes! Thank you for sharing! Story of my life!",
    date_created: "October 31, 2021",
    user_id: 3,
    thread_id: 1,
  },
  {
    comment_body: "LOL. I realized the same thing two days ago!",
    date_created: "October 31, 2021",
    user_id: 1,
    thread_id: 2,
  },
];

//* create function to seed the comment example data
const seedComments = () => Comment.bulkCreate(commentData);

//* export the function
module.exports = seedComments;

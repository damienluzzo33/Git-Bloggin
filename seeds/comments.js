const { Comment } = require('../models');

const commentData = [
  {
    comment_body: "Wow. This post really helped me with a student I've been tutoring. Thanks for sharing!",
    data_created: "October 31, 2021",
    time_created: "00:26",
    user_id: 2,
    thread_id: 1,
  },
  {
    comment_body: "Yes! Thank you for sharing! Story of my life!",
    data_created: "October 31, 2021",
    time_created: "00:28",
    user_id: 3,
    thread_id: 1,
  },
  {
    comment_body: "LOL. I realized the same thing two days ago!",
    data_created: "October 31, 2021",
    time_created: "00:31",
    user_id: 1,
    thread_id: 2,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;

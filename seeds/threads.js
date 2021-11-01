//*  import the tread model
const { Thread } = require('../models');

//* Create example/seed data set for the thread data
const threadData = [
  {
    title: "Dealing with a help-rejecting complainer...",
    text_body: "If you're dealing with someone like this, I found this article to be super helpful: https://psychcentral.com/blog/therapy-soup/2013/02/the-blame-game-dealing-with-a-help-rejecting-complainer#1",
    date_created: "October 30, 2021",
    user_id: 1
  },
  {
    title: "Referencing activities from class = The way to go!",
    text_body: "Y'ALL! It's hella easy to do the homework if you just check out the activities from the same module in class! Can't believe it took me so long to figure that out. LOL.",
    date_created: "October 30, 2021",
    user_id: 3
  },
]

//*  create function to seed the threads with example data
const seedThreads = () => Thread.bulkCreate(threadData);

//*  export the function
module.exports = seedThreads;

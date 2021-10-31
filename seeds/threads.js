const { Thread } = require('../models');

const threadData = [
  {
    title: "Dealing with a help-rejecting complainer...",
    text_body: "If you're dealing with someone like this, I found this article to be super helpful: https://psychcentral.com/blog/therapy-soup/2013/02/the-blame-game-dealing-with-a-help-rejecting-complainer#1",
    date_created: "October 30, 2021",
    time_created: "23:58",
    user_id: 1
  },
  {
    title: "Referencing activities from class = The way to go!",
    text_body: "Y'ALL! It's hella easy to do the homework if you just check out the activities from the same module in class! Can't believe it took me so long to figure that out. LOL.",
    date_created: "October 30, 2021",
    time_created: "23:58",
    user_id: 3
  },
]

const seedThreads = () => Thread.bulkCreate(threadData);

module.exports = seedThreads;

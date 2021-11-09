//*  Import express router and models
const router = require('express').Router();
const { Thread, Comment, User } = require('../models');
// Import custom middleware
const withAuth = require('../utils/auth');

//*  GET all of the threads for homepage
router.get('/', async (req, res) => {
  try {
    //* Find All Thread Data
    const dbThreadData = await Thread.findAll({
      //* Join The Users with the Threads
      include: [{
        model: User,
        foreignKey: 'user_id',
        as: 'user',
      }]
    });
    //*  Get threads data and map it to convert array objects into JSON
    const threads = dbThreadData.map((thread) =>
      thread.get({ plain: true })
    );
    //*  Render the homepage.handlebars page with the threads data
    res.render('homepage', {threads, loggedIn: req.session.loggedIn});
  } catch (err) {
    //* Throw error if we can't connect to the server
    console.log(err);
    res.status(500).json(err);
  }
});

//* GET all the threads for the logged in user
router.get('/dashboard', withAuth, async (req, res) => {
  try {
    //* Find All Thread Data that belong to user
    const userThreadsData = await Thread.findAll({
      //* Join The Users with the Threads
      include: [{
        model: User,
        foreignKey: 'user_id',
        as: 'user',
      }],
      where: {
        user_id: req.session.user_id
      }
    });
    //*  Get threads data and map it to convert array objects into JSON
    const threads = userThreadsData.map((thread) =>
      thread.get({ plain: true })
    );

    res.render('dashboard', {threads, loggedIn: req.session.loggedIn});
  } catch (err) {
    //* Throw error if we can't connect to the server
    console.log(err);
    res.status(500).json(err);
  }
})

//*  GET one thread by Id, and use custom middleware before allowing the user to access the thread
router.get('/threads/:id', withAuth, async (req, res) => {
  try {
    //* Find specific Thread Data based on the thread ID user is seeking
    const dbThreadData = await Thread.findByPk(req.params.id, {
      //*  Double Join the Comment and User Data
      include: [
        'user',
        'comment'
      ]
    })

    //*  Get threads data and map it to convert sequelize object into JSON
    const thread = dbThreadData.get({ plain: true });
    //*  Render the thread.handlebars page with the threads data
    res.render('thread', { thread, loggedIn: req.session.loggedIn });
  } catch (err) {
    //* Throw error if we can't connect to the server
    console.log(err);
    res.status(500).json(err);
  }
});

//*  GET one comment by Id, and use custom middleware before allowing the user to access the comment
router.get('/comments/:id', withAuth, async (req, res) => {
  try {
    //* Find specific Comment Data based on the comment ID user is seeking
    const dbCommentData = await Comment.findByPk(req.params.id, {
      //* Join Comment table with the User table
      include: [{model: User}],
    });
    //*  Get comments data and map it to convert sequelize object into JSON
    const comment = dbCommentData.get({ plain: true });
    //*  Render the comment.handlebars page with the comments data
    res.render('comment', { comment, loggedIn: req.session.loggedIn });
  } catch (err) {
    //* Throw error if we can't connect to the server
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;

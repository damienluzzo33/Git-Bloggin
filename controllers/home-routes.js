const router = require('express').Router();
const { Thread, Comment, User } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');

// GET all galleries for homepage
router.get('/', async (req, res) => {
  try {
    const dbThreadData = await Thread.findAll({
      include: [
        {
          model: Comment,
          attributes: ['comment_body', 'date_created', 'time_created']
        },
        {
          model: User,
          attributes: ['username']
        }
      ],
    });

    const threads = dbThreadData.map((thread) =>
      thread.get({ plain: true })
    );

    res.render('homepage', {
      threads,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one gallery
// Use the custom middleware before allowing the user to access the gallery
router.get('/threads/:id', withAuth, async (req, res) => {
  try {
    const dbThreadData = await Thread.findByPk(req.params.id, {
      include: [
        {
          model: Comment,
          attributes: ['id','comment_body','date_crated','time_created', 'user_id', 'thread_id'
          ],
        },
        {
          model: User,
          attributes: [
            'username'
          ]
        },
      ],
    });

    const thread = dbThreadyData.get({ plain: true });
    res.render('thread', { thread, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one painting
// Use the custom middleware before allowing the user to access the painting
router.get('/comments/:id', withAuth, async (req, res) => {
  try {
    const dbCommentData = await Comment.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['username']
        },
      ],
    });

    const comment = dbCommentData.get({ plain: true });

    res.render('comment', { comment, loggedIn: req.session.loggedIn });
  } catch (err) {
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

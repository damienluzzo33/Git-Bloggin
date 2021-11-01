//*  Import express router and the userRoutes 
const router = require('express').Router();
const userRoutes = require('./user-routes');
const commentRoutes = require('./comment-routes');
const threadRoutes = require('./thread-routes');

//*  If the user routes to a /users route, route them to the user-routes
router.use('/users', userRoutes);
router.use('/comments', commentRoutes);
router.use('/threads', threadRoutes);

//*  export the router
module.exports = router;

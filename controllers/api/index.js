//*  Import express router and the userRoutes 
const router = require('express').Router();
const userRoutes = require('./user-routes');

//*  If the user routes to a /users route, route them to the user-routes
router.use('/users', userRoutes);

//*  export the router
module.exports = router;

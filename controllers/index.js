//*  Import express router, the api routes, and the homeroutes
const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');

//*  route user to home routes and api routes depending on the request sent
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

//*  Export the router
module.exports = router;

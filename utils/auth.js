//* create middleware that checks if the user is logged in or not
const withAuth = (req, res, next) => {
    //* If the user is not logged in, redirect the request to the login route
    if (!req.session.logged_in) {
        res.redirect('/login');
        //* otherwise let them through to the route handler
    } else {
        next();
    }
};

//* export the withAuth function
module.exports = withAuth;

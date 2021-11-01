//*  Import express router and User model
const router = require('express').Router();
const { User } = require('../../models');

//*  CREATE new user
router.post('/', async (req, res) => {
  try {
    //*  Create new user based on fields provided in handlebars page
    const dbUserData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    //* When user account is created, then save to session the fact that the user is now logged in
    req.session.save(() => {
      req.session.loggedIn = true;
      res.status(200).json(dbUserData);
    });
    //*  If there is a server error, throw the error
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//*  Allow user to log in using their username and password
router.post('/login', async (req, res) => {
  try {
    //*  Find the data that matches the username given by the user
    const dbUserData = await User.findOne({
      where: {
        username: req.body.username,
      },
    });
    //*  If the user data doesn't exist, throw a 400 error
    if (!dbUserData) {
      res.status(400).json({ message: 'You entered an incorrect email or password. Please try again!' });
      return;
    }
    //*  Check to see if the provided username matches the username on file
    const validPassword = await dbUserData.checkPassword(req.body.password);
    //*  If the password is incorrect, throw the same error to the user regarding improper login
    if (!validPassword) {
      res.status(400).json({ message: 'You entered an incorrect email or password. Please try again!' });
      return;
    }
    //*  If password is valid, then save to session the fact that the user is now logged in
    req.session.save(() => {
      req.session.loggedIn = true;
      res.status(200).json({ user: dbUserData, message: 'You are now logged in!' });
    });
    //*  Otherwise, throw a server error
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//*  Allow the user to logout
router.post('/logout', (req, res) => {
  //* If the loggedIn key from the session is true, then destroy the session and log user out
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
    //*  Otherwise, throw a 404 error 
  } else {
    res.status(404).end();
  }
});

//*  Export the router
module.exports = router;

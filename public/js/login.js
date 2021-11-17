//* Create function to handle login form
const loginFormHandler = async (event) => {
  //*  prevent the default refresh from form submit
  event.preventDefault();
  //*  get the username and password values from the input fields
  const username = document.querySelector('#loginUsername').value.trim();
  const password = document.querySelector('#loginPassword').value.trim();

  //*  if the username and password were submitted
  if (username && password) {
    //*  Fetch the login data from the /users/login api route
    const response = await fetch('/api/users/login', {
      //*  define the parameters of the post request being sent
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    //*  if the response comes back okay, then send the user to the homepage
    if (response.ok) {
      document.location.replace('/');
      window.location.reload();
      //*  otherwise, let the user know the login attempt failed
    } else {
      alert('Failed to log in.');
    }
  }
};
//*  Create function to allow the user to sign-up and create an account 
const signupFormHandler = async (event) => {
  //*  prevent the default page refresh
  event.preventDefault();
  //*  get the username, email, and password from the user based on values entered in signup form
  const username = document.querySelector('#signupUsername').value.trim();
  const email = document.querySelector('#signupEmail').value.trim();
  const password = document.querySelector('#signupPassword').value.trim();

  //*  if the username, email, and password are all not empty
  if (username && email && password) {
    //*  fetch the user-signup data from the /users/ base api route
    const response = await fetch('/api/users', {
      //*  define the parameters of the post request being sent
      method: 'POST',
      body: JSON.stringify({ username, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    //* if the response comes back okay, then send the user to the homepage
    if (response.ok) {
      document.location.replace('/');
      window.location.reload();
      //* otherwise, let the user know that they failed to properly sign-up
    } else {
      alert('Failed to sign up.');
    }
  }
};

//* create variable to hold login form submit button
let loginForm = document.querySelector('.formLogIn')
//* add event listener to call the above login form handler function when button is clicked
loginForm.addEventListener('submit', loginFormHandler);

//* create variable to hold sign-up form submit button
let signUpForm = document.querySelector('.formSignUp')
//* add event listener to call the above sign-up form handler function when button is clicked
signUpForm.addEventListener('submit', signupFormHandler);

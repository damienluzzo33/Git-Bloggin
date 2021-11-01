//* Create function to allow user to logout of account
const logout = async () => {
  //* fetch the data from the /users/logout api route
  const response = await fetch('/api/users/logout', {
    //*  define the parameters of the post request being sent
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  //* if the response is okay, then send the user to the homepage
  if (response.ok) {
    document.location.replace('/');
    //* otherwise let the user know that they failed to properly log out of their account
  } else {
    alert('Failed to log out.');
  }
};

//* create variable to hold logout button
let logOut = document.querySelector('#logout');
//* add event listener to call the above log-out handler function when button is clicked
logOut.addEventListener('click', logout);

const loginHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form handlebar
    const email = document.querySelector('#loginEmail').value.trim();
    const password = document.querySelector('#loginPassword').value.trim();
  

    if (email && password) {

      // Send a POST request to the API endpoint
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  

      // If successful, redirect the browser to the profile page
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  };
  


  const signupHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#signupName').value.trim();
    const email = document.querySelector('#signupEmail').value.trim();
    const password = document.querySelector('#signupPassword').value.trim();
  
    if (name && email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document
    .querySelector('.loginForm')
    .addEventListener('submit', loginHandler);
  
  document
    .querySelector('.signupForm')
    .addEventListener('submit', signupHandler);
  
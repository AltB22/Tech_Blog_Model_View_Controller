const loginFormHandler = async (event) => {
    // TODO: Add a comment describing the functionality of this statement
    // want to prevent clearing everything using prevent default
    event.preventDefault();
  
    // TODO: Add a comment describing the functionality of these expressions
    // traversing DOM
    const email = document.querySelector('#user-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (email && password) {
      // TODO: Add a comment describing the functionality of this expression
      //using POST to pass in email and password
      const response = await fetch('/api/user/login', {
        method: 'POST',
        body: JSON.stringify({ user_name, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to log in');
      }
    }
  };
  
  document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);
  
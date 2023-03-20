const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const user_name = document.querySelector('#user-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (user_name && password) {
  
      const response = await fetch('/api/user/login', {
        method: 'POST',
        body: JSON.stringify({ user_name, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/home');
      } else {
        alert('Failed to log in');
      }
    }
  };
  
  document
    .getElementById('login-btn')
    .addEventListener('submit', loginFormHandler);
  
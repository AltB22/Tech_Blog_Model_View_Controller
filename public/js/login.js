const loginButtonHandler = async (event) => {
    event.preventDefault();
  
    const user_name = document.querySelector('#user-name').value.trim();
    const password = document.querySelector('#password').value.trim();
  
    if (user_name && password) {
  
      const response = await fetch('/api/user/login', {
        method: 'POST',
        body: JSON.stringify({ user_name, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to log in');
      }
    }
  };
  
  document.getElementById('login-btn').addEventListener('submit', loginButtonHandler);
  
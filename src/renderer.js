document.getElementById('login-button').addEventListener('click', async () => {
    const loggedIn = await window.auth.login();
    console.log(loggedIn);
  })
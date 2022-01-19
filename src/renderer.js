document.getElementById('login-button').addEventListener('click', async () => {
    const loggedIn = await window.auth.login();
    console.log(loggedIn);
})

document.getElementById('signup-button').addEventListener('click', async () => {
  const sign = await window.auth.signUp();
  console.log(sign);
})

async function testfunctionClick() {
  const sign = await window.auth.signUp();
  alert("function test done")
}
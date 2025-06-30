document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  if (username && password) {
    alert(`Welcome back, ${username}! ✨`);
    // Replace with actual authentication logic
    e.target.reset()
  } else {
    alert("Please enter both username and password.");
  }


});

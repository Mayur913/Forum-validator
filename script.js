document.getElementById('form').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const pass = document.getElementById('password').value;
  const confirm = document.getElementById('confirmPassword').value;
  const message = document.getElementById('message');
  if (!email.includes('@')) {
    message.textContent = 'Invalid email.';
  } else if (pass.length < 6) {
    message.textContent = 'Password too short.';
  } else if (pass !== confirm) {
    message.textContent = 'Passwords do not match.';
  } else {
    message.style.color = 'green';
    message.textContent = 'Form submitted successfully!';
  }
});
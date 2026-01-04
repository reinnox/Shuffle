function hash(str) {
  return btoa(str);
}

function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  if (!email || !password) return alert('Fill all fields');

  const users = JSON.parse(localStorage.getItem('users') || '{}');

  if (!users[email]) {
    users[email] = { password: hash(password), data: {} };
  } else if (users[email].password !== hash(password)) {
    return alert('Wrong password');
  }

  localStorage.setItem('users', JSON.stringify(users));
  localStorage.setItem('currentUser', email);
  location.href = 'app.html';
}

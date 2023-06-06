const loginForm = document.querySelector('#login-form');
const loginErrorMessage = document.querySelector('#login-error-message');
const signupForm = document.querySelector('#signup-form');
const signupErrorMessage = document.querySelector('#signup-error-message');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = loginForm.querySelector('input[type="text"]').value.trim();
  const password = loginForm.querySelector('input[type="password"]').value.trim();
  
  if (email === '' || password === '') {
    loginErrorMessage.textContent = 'Please fill in all fields';
    return;
  }

  if (!validateEmail(email)) {
    loginErrorMessage.textContent = 'Invalid email format';
    return;
  }

  const users = JSON.parse(localStorage.getItem('users')) || [];
  const registeredEmails = users.map(user => user.email);
  
  if (!registeredEmails.includes(email)) {
    loginErrorMessage.textContent = 'This email is not registered';
    return;
  }

  const user = users.find(user => user.email === email && user.password === password);
  
  if (!user) {
    loginErrorMessage.textContent = 'Incorrect password';
    return;
  }

  localStorage.setItem('currentUser', JSON.stringify(user));
  
  window.location.href = 'MainPage.html';
});

signupForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const fullName = signupForm.querySelector('input[type="name"]').value.trim();
  const email = signupForm.querySelector('input[type="text"]').value.trim();
  const password = signupForm.querySelector('input[type="password"]').value.trim();
  
  if (fullName === '' || email === '' || password === '') {
    signupErrorMessage.textContent = 'Please fill in all fields';
    return;
  }

  if (!validateEmail(email)) {
    signupErrorMessage.textContent = 'Invalid email format';
    return;
  }

  const users = JSON.parse(localStorage.getItem('users')) || [];
  const user = users.find(user => user.email === email);
  
  if (user) {
    signupErrorMessage.textContent = 'This email is already registered';
    return;
  }

  const newUser = { fullName, email, password };
  users.push(newUser);
  localStorage.setItem('users', JSON.stringify(users));
  
  localStorage.setItem('currentUser', JSON.stringify(newUser));
  
  window.location.href = 'MainPage.html';
}); 

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// const loginLink = document.getElementById('login-link');
// const signupLink = document.getElementById('signup-link');
// const checkbox = document.querySelector('.checkbox');

// loginLink.addEventListener('click', () => {
//   checkbox.checked = false;
// });

// signupLink.addEventListener('click', () => {
//   checkbox.checked = true;
// });

localStorage.clear();
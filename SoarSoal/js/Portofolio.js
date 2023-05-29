function validateForm(event) {
    event.preventDefault();

  var fullname = document.getElementById('fullname').value;
  var email = document.getElementById('email').value;

  if (fullname === '' || email === '') {
    displayErrorMessage('Please fill in all fields');
    return false;
  }

  if (!validateEmail(email)) {
    displayErrorMessage('Please enter a valid email address');
    return false;
  }

  event.target.submit();
}

function validateEmail(email) {
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

function displayErrorMessage(message) {
  var errorMessageElement = document.getElementById('error-message');
  errorMessageElement.textContent = message;
}
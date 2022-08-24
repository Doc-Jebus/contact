const email = document.querySelector('#email');
const emailError = document.querySelector('#email-error');
const confirmation = document.querySelector('#confirmation');
let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
let notMatch = !validRegex;

let confirmCheck = "✓";
let emailWarning = "Please enter a valid email address.";


email.addEventListener('focusout', (e) => {
  e.target.value.match(validRegex) ? 
	confirmation.textContent = confirmCheck :
	emailError.textContent = emailWarning;
})

email.addEventListener('focusin', (e) => {
  confirmation.textContent = '';
	emailError.textContent = '';
	return;
})



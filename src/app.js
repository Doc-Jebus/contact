const email = document.querySelector('#email');
const emailError = document.querySelector('#email-error');
const confirmation = document.querySelector('#confirmation');
const firstName = document.querySelector('#first-name');
const firstNameConfirm = document.querySelector('#first-name-confirm');
const lastName = document.querySelector('#last-name');
const lastNameConfirm = document.querySelector('#last-name-confirm');
const userName = document.querySelector('#user-name');
const userNameConfirm = document.querySelector('#username-confirm');
const userNameError = document.querySelector('#user-name-error');
let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


let confirmCheck = "✓";
let emailWarning = "Please enter a valid email address.";
let userNameWarning = "Username must be between 5 and 25 characters.";


email.addEventListener('focusout', (e)=> {
  e.target.value.match(validRegex) ? 
	confirmation.textContent = confirmCheck :
	emailError.textContent = emailWarning;
})

email.addEventListener('focusin', ()=> {
  confirmation.textContent = '';
	emailError.textContent = '';
	return;
})

firstName.addEventListener('focusout', (e)=> {
	let firstNam = document.getElementById('first-name').value;
	let firstStr = [...firstNam];
	firstStr.length >= 2 ?
	firstNameConfirm.textContent = confirmCheck :
	firstName.value = '';
})

firstName.addEventListener('focusin', ()=> {
  firstNameConfirm.textContent = '';
	firstName.textContent = '';
	return;
})

lastName.addEventListener('focusout', (e)=> {
	let lastNam = document.getElementById('last-name').value;
	let lastStr = [...lastNam];
	lastStr.length >= 2 ?
	lastNameConfirm.textContent = confirmCheck :
	lastName.value = '';
	})

lastName.addEventListener('focusin', ()=> {
  lastNameConfirm.textContent = '';
	lastName.textContent = '';
	return;
	})

userName.addEventListener('focusout', (e)=> {
	let userNam = document.getElementById('user-name').value;
	let userStr = [...userNam];
	userStr.length >= 5 || userStr.length <= 25 ?
	userNameConfirm.textContent = confirmCheck :
	userNameError.textContent = userNameWarning;
})

userName.addEventListener('focusin', ()=> {
  userNameConfirm.textContent = '';
	userName.textContent = '';
	return;
})

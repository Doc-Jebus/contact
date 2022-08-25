const email = document.querySelector('#email');
const emailError = document.querySelector('#email-error');
const confirmation = document.querySelector('#confirmation');
const firstName = document.querySelector('#first-name');
const firstNameConfirm = document.querySelector('#first-name-confirm');
const lastName = document.querySelector('#last-name');
let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


let confirmCheck = "✓";
let emailWarning = "Please enter a valid email address.";


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
	let firstStr = firstNam.toString();
	for(let i = 0; i < firstNam.length; i++) {
		firstNam[i].length < 1 ?
		firstNameConfirm.textContent = confirmCheck :
		firstName.value = '';
	}
})



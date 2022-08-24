console.log("Hello World");
    const email = document.querySelector('#email');
    const emailError = document.querySelector('#email-error');
    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

let confirmation = "✓";
let emailWarning = "Please enter a valid email address!";

email.addEventListener('focusout', (e) => {
    
    if (e.target.value.match(validRegex)) {
        emailError.textContent = confirmation;
    } else {
        emailError.textContent = emailWarning;
    }
})
    

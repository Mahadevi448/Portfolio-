// Selecting elements
const form = document.querySelector('#form');
const firstname = document.querySelector('#firstname');
const lastname = document.querySelector('#lastname');
const email= document.querySelector('#email');
const phonenumber = document.querySelector('#phonenumber');

// Attach event listener
form.addEventListener('submit', (e) => {
    if (!validate()) {
        e.preventDefault();
    }
});

// Validation function
function validate() {
    let isValid = true;

    const firstnameVal = firstname.value.trim();
    const lastnameVal = lastname.value.trim();
    const emailVal = email.value.trim();
    const phonenumberVal = phonenumber.value.trim();

    // Validate Firstname
    if (firstnameVal === '') {
        setError(firstname, 'Firstname is required');
        isValid = false;
    } else {
        setSuccess(firstname);
    }

    // Validate Lastname
    if (lastnameVal === '') {
        setError(lastname, 'Lastname is required');
        isValid = false;
    } else {
        setSuccess(lastname);
    }

     // Validate Email
     if (emailVal === '') {
        success = false;
        setError(email, 'Email is required');
    } else if (!validateemail(emailVal)) {
        success = false;
        setError(email, 'Please enter a valid Email');
    } else {
        setSuccess(email);
    }

    // Validate Phone Number
    if (phonenumberVal === '') {
        setError(phonenumber, 'Phone number is required');
        isValid = false;
    } else if (!/^\d{10}$/.test(phonenumberVal)) { 
        setError(phonenumber, 'Phone number must be 10 digits');
        isValid = false;
    } else {
        setSuccess(phonenumber);
    }

    return isValid;
}

// Set error
function setError(element, message) {
    const formGroup = element.parentElement;
    const errorElement = formGroup.querySelector('.error');

    errorElement.innerText = message;
    formGroup.classList.add('error');
    formGroup.classList.remove('success');
}

// Set success
function setSuccess(element) {
    const formGroup = element.parentElement;
    const errorElement = formGroup.querySelector('.error');

    errorElement.innerText = '';
    formGroup.classList.add('success');
    formGroup.classList.remove('error');
}

function validateEmail(email) {
    // Fixed regex without double backslashes
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}
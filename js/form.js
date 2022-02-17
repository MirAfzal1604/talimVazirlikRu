const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const theme = document.getElementById('theme');
const textareatel = document.getElementById("tel");
const textarea = document.getElementById("formTextArea");

form.addEventListener('submit', e => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    // trim to remove the whitespaces
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const themeValue = theme.value.trim();
    const telValue = tel.value.trim();
    const textAreaValue = textarea.value.trim();

    if (usernameValue === '') {
        setErrorFor(username, 'Username cannot be blank');
    } else {
        setSuccessFor(username);
    }

    if (emailValue === '') {
        setErrorFor(email, 'Email cannot be blank');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Not a valid email');
    } else {
        setSuccessFor(email);
    }

    if (themeValue === '') {
        setErrorFor(theme, 'Theme cannot be blank');
    } else {
        setSuccessFor(theme);
    }

    if (telValue === '') {
        setErrorFor(tel, 'phone number cannot be blank');
    } else {
        setSuccessFor(tel);
    }

    if (textAreaValue === '') {
        setErrorFor(textarea, 'text cannot be blank');
    } else {
        setSuccessFor(textarea);
    }

}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
"use strict"

let nameInput = document.querySelector('.input-name'), 
nameDiv = document.querySelector('.name'),  
emailInput = document.querySelector('.input-email'), 
emailDiv = document.querySelector('.email'), 
loginInput = document.querySelector('.input-login'), 
loginDiv = document.querySelector('.login'), 
passwordInput = document.querySelector('.input-password'), 
passwordDiv = document.querySelector('.password'),
terminal = document.querySelector('.terminal'),
terminalText = document.querySelector('.terminal-text'),
submitBtn = document.querySelector('.btn'),
succesText = document.querySelector('.success-hide');

const emailValidation = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
nameValidation = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/, 
loginValidation = /^[a-zA-Z](.[a-zA-Z0-9_-]*)$/, 
passwordValidation = /.*([a-z]+[A-Z]+[0-9]+|[a-z]+[0-9]+[A-Z]+|[A-Z]+[a-z]+[0-9]+|[A-Z]+[0-9]+[a-z]+|[0-9]+[a-z]+[A-Z]+|[0-9]+[A-Z]+[a-z]+).*/;

const errorName = "Please enter a word from letters",
errorEmail = "Please enter a valid email",
errorLogin = "Please enter a login consisting only of letters and numbers",
errorPassword = "Please enter a password consisting of upper and lower case letters and numbers";

let first  = false, email = false, pass = false, login = false;

let toggleActive = (elemSelect, elemToggle) => {
    elemSelect.onfocus = () => elemToggle.classList.toggle('active');
    elemSelect.onblur = () => elemToggle.classList.toggle('active');
}

let getValidate = (elemInput, valueValidation) => {
    elemInput.addEventListener("keyup", () => {
        if(!valueValidation.test(elemInput.value)) {
            elemInput.style.borderBottom = '0.7vh solid red';
            terminal.style.display = 'block';
            switcher(valueValidation, true, false);
        } else {
            terminal.style.display = 'none';
            elemInput.style.borderBottom = '0.7vh solid rgb(75, 250, 52)';
            switcher(valueValidation, false, true);
        }
        email && first && login && pass ? submitBtn.disabled = false : submitBtn.disabled = true;
    })
}

const switcher = (valueValidation, stateErrors, stateSubmit = false) => {
    switch (valueValidation) {
        case emailValidation:
            stateErrors ? terminalText.textContent = errorEmail : undefined;
            email = stateSubmit;
            break;
        case nameValidation:
            stateErrors ? terminalText.textContent = errorName : undefined;
            first = stateSubmit;
            break;
        case loginValidation:
            stateErrors ? terminalText.textContent = errorLogin : undefined;
            login = stateSubmit;
            break;
        case passwordValidation:
            stateErrors ? terminalText.textContent = errorPassword : undefined;
            pass = stateSubmit;
            break;
        default:
            break;
    }
}

const formAccept = (button) => {
    button.addEventListener('click', () => {
        succesText.classList.toggle('success-show')
    })
}

formAccept(submitBtn);

toggleActive(nameInput, nameDiv);
toggleActive(emailInput, emailDiv);
toggleActive(loginInput, loginDiv);
toggleActive(passwordInput, passwordDiv);

getValidate(nameInput, nameValidation);
getValidate(emailInput, emailValidation);
getValidate(loginInput, loginValidation);
getValidate(passwordInput, passwordValidation);
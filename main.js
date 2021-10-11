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
terminalText = document.querySelector('.terminal-text');

const emailValidation = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
nameValidation = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/, 
loginValidation = /^[a-zA-Z](.[a-zA-Z0-9_-]*)$/, 
passwordValidation = /.*([a-z]+[A-Z]+[0-9]+|[a-z]+[0-9]+[A-Z]+|[A-Z]+[a-z]+[0-9]+|[A-Z]+[0-9]+[a-z]+|[0-9]+[a-z]+[A-Z]+|[0-9]+[A-Z]+[a-z]+).*/;

const errorName = "Please enter a word from letters",
errorEmail = "Please enter a valid email",
errorLogin = "Please enter a login consisting only of letters and numbers",
errorPassword = "Please enter a password consisting of upper and lower case letters and numbers";

let toggleActive = (elemSelect, elemToggle) => {
    elemSelect.onfocus = () => elemToggle.classList.toggle('active');
    elemSelect.onblur = () => elemToggle.classList.toggle('active');
}

let getValidate = (elemInput, valueValidation) => {
    elemInput.addEventListener("keyup", () => {
        if(!valueValidation.test(elemInput.value)) {
            elemInput.style.borderBottom = '0.7vh solid red';
            terminal.style.display = 'block';
            switch (valueValidation) {
                case emailValidation:
                    terminalText.textContent = errorEmail;
                    break;
                case nameValidation:
                    terminalText.textContent = errorName;
                    break;
                case loginValidation:
                    terminalText.textContent = errorLogin;
                    break;
                case passwordValidation:
                    terminalText.textContent = errorPassword;
                    break;
                default:
                    break;
            }
        } else {
            terminal.style.display = 'none';
            elemInput.style.borderBottom = '0.7vh solid rgb(75, 250, 52)';
        }
    })
}



toggleActive(nameInput, nameDiv);
toggleActive(emailInput, emailDiv);
toggleActive(loginInput, loginDiv);
toggleActive(passwordInput, passwordDiv);

getValidate(nameInput, nameValidation);
getValidate(emailInput, emailValidation);
getValidate(loginInput, loginValidation);
getValidate(passwordInput, passwordValidation);
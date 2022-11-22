'use strict';

function addErrorPainting(classOfInputField) {
    document.querySelector(classOfInputField).classList.add('field-entry-error');
};

function addNormalPainting(classOfInputField) {
    if (document.querySelector(classOfInputField).classList.contains('field-entry-error')) {
        document.querySelector(classOfInputField).classList.remove('field-entry-error');
    }
}

function returnErrorMessage(labelClass, textToAdd) {
    document.querySelector(labelClass).textContent = textToAdd;
};

const formValues = document.forms.registrationform;
const submit = document.getElementById('submit');
submit.addEventListener('click', (event) => {
    event.preventDefault();

    // email validation
    
    let emailIsValid = true;
    const email = formValues.elements.email.value;
    addNormalPainting('input.registration-form__email-input');
    returnErrorMessage('.email-wrong', '');
    if (!email) {
        addErrorPainting('input.registration-form__email-input');
        returnErrorMessage('.email-wrong', 'Поле обязательно для заполнения');
        emailIsValid = false;
    } else {
        function validateEmail(email) {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        }
        if (!validateEmail(email)) {
            addErrorPainting('input.registration-form__email-input');
            returnErrorMessage('.email-wrong', 'Email введен некорректно');
            emailIsValid = false;
        }
    };

    // pass validation

    let passIsValid = true;
    const pass = formValues.elements.pass.value;
    addNormalPainting('input.registration-form__password-input')
    returnErrorMessage('.pass-wrong', '');
    if (!pass) {
        addErrorPainting('input.registration-form__password-input');
        returnErrorMessage('.pass-wrong', 'Поле обязательно для заполнения');
        passIsValid = false;
    } else {
        if (pass.length < 8) {
            addErrorPainting('input.registration-form__password-input');
            returnErrorMessage('.pass-wrong', 'Пароль должен содержать не менее 8 символов');
            passIsValid = false;
        }
    };

    // confirmPass validation

    let confirmPassIsValid = true;
    const confirmPass = formValues.elements.confirmPass.value;
    addNormalPainting('input.registration-form__confirm-password-input')
    returnErrorMessage('.confirm-pass-wrong', '');
    if (!confirmPass || confirmPass !== pass) {
        addErrorPainting('input.registration-form__confirm-password-input');
        returnErrorMessage('.confirm-pass-wrong', 'Пароли не совпадают');
        confirmPassIsValid = false;
    };

    // return result object

    if (emailIsValid && passIsValid && confirmPassIsValid) {

        const gender = formValues.elements.gender.value;
        const aboutMe = formValues.elements.aboutMe.value;
        const subscribeStatus = formValues.elements.subscribe.checked;
        let subscribe;
        if (subscribeStatus) {
            subscribe = 'on';
        } else {
            subscribe = 'off';
        };

        const result = new Object();
        result['email'] = email;
        result['pass'] = pass;
        result['confirmPass'] = confirmPass;
        result['gender'] = gender;
        result['aboutMe'] = aboutMe;
        result['subscribe'] = subscribe;

        console.log(result);

    }
});
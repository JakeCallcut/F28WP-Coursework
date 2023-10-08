document.addEventListener('DOMContentLoaded', function() {

    const submit = document.getElementById('submitButton');

    submit.addEventListener('click', function() {
        const email = document.getElementById('emailInput').value;
        const password = document.getElementById('passwordInput').value;
        alert("email is " + email + " and password is " + password);
    });

});

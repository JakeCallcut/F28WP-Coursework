document.addEventListener('DOMContentLoaded', function() {

  let createMode = false;
  const users = [
  { email: 'jakecallcut@gmail.com', password: 'guinness' },
  { email: 'johnsnow@outlook.com', password: 'gameofthrones' },
  { email: 'johnnywilson@gmail.com', password: 'Password123' }
  ];

    const submit = document.getElementById('submitButton');
    submit.addEventListener('click', function() {
      const email = document.getElementById('emailInput').value;
      const password = document.getElementById('passwordInput').value;

      if (checkInput(email, password)) {
          window.location.replace('index.html');
      }
      else {
          alert('Username or password incorrect');
      }
    });

    const create = document.getElementById('createButton');
    create.addEventListener('click', function() {
      if (createMode) {

      }
      else {
        event.preventDefault();
        submit.style.display = 'none';
        const mySlogan = document.getElementById('slogan');
        mySlogan.textContent = "Create Account";
        createMode = true;
      }
    });

    const passwordInput = document.getElementById('passwordInput');
    const showPassword = document.getElementById('showPass');
    showPassword.addEventListener('click', function() {
      if (passwordInput.type === 'password') {
        showPassword.src = 'images/eyeOpen.png';
        passwordInput.type = 'text';
      }
      else {
        showPassword.src = 'images/eyeClosed.png';
        passwordInput.type = 'password';
      }
    });

    function checkInput(_email, _password){
      var emailFound = false;
      var passwordFound = false;

      for (var user of users) {
        if (user.email === _email) {
          emailFound = true;
        }
        if (user.password === _password) {
          passwordFound = true;
        }
      }

      if (emailFound && passwordFound) {
        return true;
      }
      return false;
    }

});

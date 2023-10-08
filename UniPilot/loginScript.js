document.addEventListener('DOMContentLoaded', function() {

  const users = [
  { email: 'jakecallcut', password: 'guinness' },
  { email: 'jakecallcut', password: 'guinness' },
  { email: 'jakecallcut', password: 'guinness' }
  ];

    const submit = document.getElementById('submitButton');
    submit.addEventListener('click', function() {
        const email = document.getElementById('emailInput').value;
        const password = document.getElementById('passwordInput').value;

        if (!checkInput(email, password)) {
          window.location.replace('index.html');
        }
        else {
          alert('account not found: ' + email + ' ' + password);
        }
    });

    function checkInput(_email, _password){
      var emailFound = false;
      var passwordFound = false;

      for (var user in users) {
        if (user.email == _email) {
          emailFound = true;
        }
        if (user.password == _password) {
          emailFound = true;
        }
      }

      if (emailFound && passwordFound) {
        return true;
      }
      return false;
    }

});

document.addEventListener('DOMContentLoaded', function() {

  const users = [
  { email: 'jakecallcut@gmail.com', password: 'guinness' },
  { email: 'johnsnow@outlook.com', password: 'guinness' },
  { email: 'jakecallcut', password: 'guinness' }
  ];

    const submit = document.getElementById('submitButton');
    submit.addEventListener('click', function() {
        const email = document.getElementById('emailInput').value;
        const password = document.getElementById('passwordInput').value;

        if (checkInput(email, password)) {

        }
        else {

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

document.addEventListener('DOMContentLoaded', function() {

    fetch('data.txt')
        .then(response => response.text())
        .then(text => {
            const lines = text.split('\n');
        })
        .catch(error => {
            console.error('Error loading text file:', error);
        });

    const submit = document.getElementById('submitButton');
    submit.addEventListener('click', function() {
        const email = document.getElementById('emailInput').value;
        const password = document.getElementById('passwordInput').value;

        if (checkInput(email, password)) {
          alert('logged in')
        }
        else {
          alert('account not found')
        }
    });

    function checkInput(_email, _password){
      var emailFound = false;
      var passwordFound = false;

      for (var i = 0; i < lines.length; i++) {
        if (_email == lines[i]) {
          emailFound = true;
        }
        if (_password == lines[i]) {
          passwordFound = true;
        }
      }

      if (emailFound && passwordFound) {
        return true;
      }
      return false;
    }

});

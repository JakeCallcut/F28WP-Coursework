document.addEventListener('DOMContentLoaded', function() {
  let createMode = false;

  const submit = document.getElementById('submitButton');
  submit.addEventListener('click', function() {
    const username = document.getElementById('emailInput').value;
    const password = document.getElementById('passwordInput').value;

    if (getUser(username, password)) {
        window.location.replace('index.html');
    }
    else {
        alert('Username or password incorrect');
    }
  });

  function getUser(username, password) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find((user) => user.username === username);

    alert

    if (user && user.password === password) {
      return true;
    } else {
      return false;
    }
  }

  function addUser(username, password){
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.some((user) => user.username === username);

    if (userExists) {
      return false;
    }

    users.push({ username, password });
    localStorage.setItem('users', JSON.stringify(users));
    return true;
  }

  const create = document.getElementById('createButton');
  create.addEventListener('click', function() {
    const status = document.getElementById('status');
    if (createMode) {
        const username = document.getElementById('emailInput').value;
        const password = document.getElementById('passwordInput').value;

        if (addUser(username, password)) {
          alert('Account successfully created');
          const localStorageData = JSON.stringify(localStorage);
          alert(localStorageData);
          window.location.replace('index.html');
        }
        else {
          status.textContent = 'This username already exists';
        }
        createMode = false;
        alert(localStorage.getItem(users));
    }
    else {
      event.preventDefault();
      submit.style.display = 'none';
      const mySlogan = document.getElementById('slogan');
      mySlogan.textContent = "Create Account";
      createMode = true;
    }
  });

  const showPassword = document.getElementById('showPass');
  showPassword.addEventListener('click', function() {
    const passwordInput = document.getElementById('passwordInput');
    if (passwordInput.type === 'password') {
      showPassword.src = 'images/eyeOpen.png';
      passwordInput.type = 'text';
    }
    else {
      showPassword.src = 'images/eyeClosed.png';
      passwordInput.type = 'password';
    }
  });

});

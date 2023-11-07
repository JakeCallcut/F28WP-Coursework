document.addEventListener('DOMContentLoaded', function() {

  const class1 = document.getElementById('class1');
  const class2 = document.getElementById('class2');
  const class3 = document.getElementById('class3');
  const class4 = document.getElementById('class4');

  class1.textContent = localStorage.getItem('class1');
  class2.textContent = localStorage.getItem('class2');
  class3.textContent = localStorage.getItem('class3');
  class4.textContent = localStorage.getItem('class4');

  var noofClasses = 0;
  const addClasses = document.getElementById('addClasses');
  addClasses.addEventListener('click', function (){
    const userInput = prompt('Please enter a class code to add');

    if (userInput) {
      switch (noofClasses) {
        case 0:
          localStorage.setItem('class1', userInput);
          class1.textContent = userInput;
          break;
        case 1:
          localStorage.setItem('class2', userInput);
          class2.textContent = userInput;
          break;
        case 2:
          localStorage.setItem('class3', userInput);
          class3.textContent = userInput;
          break;
        case 3:
          localStorage.setItem('class4', userInput);
          class4.textContent = userInput;
          break;
        default:
          alert('No more classes can be added');
      }
    }
    noofClasses++;

  });

});

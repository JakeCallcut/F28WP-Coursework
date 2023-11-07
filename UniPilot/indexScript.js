document.addEventListener('DOMContentLoaded', function() {

  const class1 = document.getElementById('class1');
  const class2 = document.getElementById('class2');
  const class3 = document.getElementById('class3');
  const class4 = document.getElementById('class4');
  var noofClasses = 0;

  const addClasses = document.getElementById('addClasses');
  addClasses.addEventListener('click', function (){
    const userInput = prompt('Please enter a class code to add');

    if (userInput) {
      switch (noofClasses) {
        case 0:
          localStorage.setItem('class1', userInput);
          class1.
          break;
        case 1:
          break;
        case 2:
          break;
        case 3:
          break;
      }
    }

  });

});

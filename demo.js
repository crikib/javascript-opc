'use strict'; 
(function() {

  let person = {
    firstName: 'Jim',
    lastName: 'Cooper',
    age = 17,
    isAdult: function(){return this.age >=18}
  };

  function registerUser(fName, lName) {
    let person = {
      firstName,
      lastName
    };
    display(person);
  }

  registerUser('Kris', 'Cooper');

  //Objects.keys() prints out the contents of an object as an array

  //Object.assign() allows copying content from one object to another.

})();
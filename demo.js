'use strict'; 
(function () {
    /*let person1 ={
      firstName: 'Fardin',
      lastName: 'Kibria',
      age: 17,
      isAdult: function() {return person1.age >=18;}
    };

    //person.age = 27; //this is possible in js if you want to reassign at any time.

    person1.isAdult = function() {
      return this.age >=18;
    }

    //display(person.firstName);
    //display(person.isAdult());

    /*function registerUser(fName, lName) {
      let person = {
        firstName: fName,
        lastName: lName
      };
      display(person);
    }

    registerUser('Kris', 'Cooper'); //passing in values to the registerUser() function*/
    
    //Using the Object as an object

    //display(Object.keys(person));

    /*for (let propertyName in person){
      //display(propertyName); //gives access to each of the property names in an object
    }*/

    //Object.assign() allows copying content from one object to another

    /*let healthstats = {
      height: 68,
      weight:150
    };

    function mergeHealthStats(person,healthstats){
      return Object.assign({}, person, healthstats);
    }

    let mergedPerson = mergeHealthStats(person, healthstats);
    display(mergedPerson);*/

    /*let fardin = {
      firstName: 'Fardin',
      lastName: 'Kibria',
      age: 29,
      isAdult: function() {return fardin.age >=18;}
    };

    display(fardin.isAdult());

    let fz = {
      firstName: 'Fardin',
      lastName: 'Kibria',
      age: 17,
      isAdult: function() {return fz.age >=18;}
    };

    
    display(fz.isAdult());*/

    //constructor function*/

    function Person(first, last, age) {
      this.firstName = first;
      this.lastName = last;
      this.age = age;
      this.isAdult = function(){return this.age > 21;}
    }

    let jim = new Person ('Jim', 'Cooper', '29');
    let sofia = new Person ('Sofia', 'Cooper', '19');

    display(jim);
    display(sofia);
    display (jim['firstName']);

    for (let propertyName in jim){
      display(propertyName + ":" + jim[propertyName]);
    }

    Object.defineProperty(jim, 'firstName', {enumerable: false});

    display(Object.getOwnPropertyDescriptor(jim, "firstName")); //shows value, writable, enumerable, configurable\

    display(JSON.stringify(jim));

    let extra = {
      name: {
        first: 'Kai',
        last: 'Havertz'
      },

      age: 29
    };

    Object.defineProperty(extra, 'fullName', 
    {
      get: function() {
        return this.name.first + ' ' + this.name.last;
      },

      set: function(value) {
        var nameParts = value.split(" ");
        this.name.first = nameParts[0];
        this.name.last = nameParts[1];
      }
    });

    extra.fullName = 'Mo Bamba';

    display(extra.fullName);
    display(extra.name.first);
    display(extra.name.last);

}) ();
'use strict';
(function() {
    function Person(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        Object.defineProperty(this, 'fullName', {
            get: function() {
                return this.firstName + ' ' + this.lastName;
      },
        enumerable: true
      });
    }


    function Student(firstName, lastName, age) {
        Person.call(this, firstName, lastName, age);
        this._enrolledCourses = [];

        this.enroll = function(courseId) {
            this._enrolledCourses.push(courseId);
        };
        this.getCourses = function() {
            return this.fullName + "'s enrolled courses are: " +
                this._enrolledCourses.join(',');
        };
    }

    Student.prototype = Object.create(Person.prototype);
    Student.prototype.constructor = Student;

    let jim = new Student('Jim', 'Cooper', '29');

    jim.enroll('COE548');
    jim.enroll('ELE404');

    display(jim.getCourses());
    display(jim.__proto__);
}) ();
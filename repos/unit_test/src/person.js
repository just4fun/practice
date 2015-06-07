(function (exports) {

  function Person(name) {
    this.name = name || 'Roronoa Zoro';
  }

  Person.prototype = {
    sayHello: function() {
      return this.name + ' says "hello" to you';
    }
  };

  exports.Person = Person;
})(this);
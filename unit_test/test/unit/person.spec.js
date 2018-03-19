var expect = chai.expect;

describe('Person', function() {
  describe('Basic Information', function() {
    it('should have a default name', function() {
      var person = new Person();
      expect(person.name).to.equal('Roronoa Zoro');
    });

    it('should have a specific name if provided', function() {
      var person = new Person('Zoro Jiang');
      expect(person.name).to.equal('Zoro Jiang');
    });

    it('should say hello to you', function() {
      var person = new Person();
      expect(person.sayHello()).to.equal('Roronoa Zoro says "hello" to you');
    });
  });
});

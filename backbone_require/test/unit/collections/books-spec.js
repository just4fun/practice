define(['books'], function(books) {

  describe('Collections', function() {
    describe('Books', function() {
      it('should return proper url', function() {
        books.param = 'javascript';
        expect(books.url()).to.equal('https://api.douban.com/v2/book/search?q=javascript');
      });
    });
  });

});

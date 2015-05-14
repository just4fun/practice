var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var BookItem = React.createClass({

  render: function() {
    var book = this.props.book;
    var subtitle = book.subtitle;
    if (subtitle) {
      subtitle = " : " + subtitle;
    }
    var authors = book.author.join('、');
    var publisher = book.publisher;
    if (publisher) {
      publisher = " / " + publisher;
    }
    var pubdate = book.pubdate;
    if (pubdate) {
      pubdate = " / " + pubdate;
    }
    var price = book.price;
    if (price) {
      price = " / " + price;
    }

    return (
      <Link to='book-detail' params={{bookId: book.id}} className='main-section__book clearfix'>
        <div className='pull-left'>
          <img className='main-section__book-img' src={book.image}/>
        </div>
        <div className='main-section__book-info'>
        <div className='main-section__book-title'>{book.title}<small>{subtitle}</small></div>
          <div>{authors} {publisher} {pubdate} {price}</div>
        </div>
      </Link>
    );
  }

});

module.exports = BookItem;
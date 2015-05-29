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
      <div className='main-section__book'>
        <Link to='book-detail' params={{bookId: book.id}} className='main-section__book-info clearfix'>
          <div className='pull-left'>
            <img className='main-section__book-info--img' src={book.image}/>
          </div>
          <div className='main-section__book-info--description'>
            <div className='main-section__book-info--title'>{book.title}<small>{subtitle}</small></div>
            <div>{authors} {publisher} {pubdate} {price}</div>
          </div>
        </Link>
        <div className='main-section__book-action'>
          <span className='glyphicon glyphicon-heart'></span>
        </div>
      </div>
    );
  }

});

module.exports = BookItem;
var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var BookItem = React.createClass({

  render: function() {
    var subtitle = this.props.book.subtitle;
    if (subtitle) {
      subtitle = " : " + subtitle;
    }
    var authors = this.props.book.author.join('、');
    var publisher = this.props.book.publisher;
    if (publisher) {
      publisher = " / " + publisher;
    }
    var pubdate = this.props.book.pubdate;
    if (pubdate) {
      pubdate = " / " + pubdate;
    }
    var price = this.props.book.price;
    if (price) {
      price = " / " + price;
    }

    return (
      <Link to='book-detail' params={{bookId: this.props.book.id}} className='main-section__book clearfix'>
        <div className='pull-left'>
          <img className='main-section__book-img' src={this.props.book.image}/>
        </div>
        <div className='main-section__book-info'>
        <div className='main-section__book-title'>{this.props.book.title}<small>{subtitle}</small></div>
          <div>{authors}{publisher}{pubdate}{price}</div>
        </div>
      </Link>
    );
  }

});

module.exports = BookItem;
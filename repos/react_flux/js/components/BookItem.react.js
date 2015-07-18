var React = require('react');
var Router = require('react-router');
var Debug = require('debug');
var Link = Router.Link;
var BookGetActions = require('../actions/BookGetActions');
var PureRenderMixin = require('react/addons').addons.PureRenderMixin;

var debug = Debug('iBook');

var BookItem = React.createClass({

  mixins: [PureRenderMixin],

  render: function() {
    // book info
    var book = this.props.book;
    var subtitle = book.get('subtitle');
    if (subtitle) {
      subtitle = " : " + subtitle;
    }
    var authors = book.get('author').join('、');
    var publisher = book.get('publisher');
    if (publisher) {
      publisher = " / " + publisher;
    }
    var pubdate = book.get('pubdate');
    if (pubdate) {
      pubdate = " / " + pubdate;
    }
    var price = book.get('price');
    if (price) {
      price = " / " + price;
    }

    // book status
    var like_status = 'glyphicon glyphicon-heart';
    if (book.get('isLike')) {
      like_status += ' like';
    }

    debug('render <BookItem />', book.get('title'));
    return (
      <div className='main-section__book'>
        <Link to='book-detail' params={{bookId: book.get('id')}} className='main-section__book-info clearfix'>
          <div className='pull-left'>
            <img className='main-section__book-info--img' src={book.get('image')}/>
          </div>
          <div className='main-section__book-info--description'>
            <div className='main-section__book-info--title'>{book.get('title')}<small>{subtitle}</small></div>
            <div>{authors} {publisher} {pubdate} {price}</div>
          </div>
        </Link>
        <div className='main-section__book-action'>
          <span className={like_status} onClick={this._onClick.bind(this, this.props.bookIndex, this.props.book)}></span>
        </div>
      </div>
    );
  },

  _onClick: function (bookIndex, book) {
    BookGetActions.like({
      index: bookIndex,
      book: book
    });
  }

});

module.exports = BookItem;
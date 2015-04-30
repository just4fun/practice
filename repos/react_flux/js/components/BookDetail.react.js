var React = require('react');
var BookStore = require('../stores/BookStore');
var BookGetActions = require('../actions/BookGetActions');
var Loading = require('./Loading.react');

function getStateFromStores() {
  return {
    book: BookStore.get(),
    isLoading: BookStore.isLoading()
  };
}

var BookDetail = React.createClass({

  getInitialState: function() {
    return getStateFromStores();
  },

  componentDidMount: function() {
    BookStore.addChangeListener(this._onChange);
    BookGetActions.get(this.props.params.bookId);
  },

  componentWillUnmount: function() {
    BookStore.removeChangeListener(this._onChange);
  },

  render: function() {
    if (this.state.isLoading) {
      return <Loading />;
    }
    var book = this.state.book;
    var authors = book.author;
    if (authors) {
      authors = "作者：" + authors.join(' / ')
    }
    var publisher = book.publisher;
    if (publisher) {
      publisher = "出版社：" + publisher;
    }
    var pubdate = book.pubdate;
    if (pubdate) {
      pubdate = "出版年：" + pubdate;
    }
    var pages = book.pages;
    if (pages) {
      pages = "页数：" + pages;
    }
    var price = book.price;
    if (price) {
      price = "定价：" + price;
    }
    var summary = book.summary;
    if (summary) {
      summary =
        <div>
          <h4>内容简介</h4>
          <p>{book.summary}</p>
        </div>
    }
    var author_intro = book.author_intro;
    if (author_intro) {
      author_intro =
        <div>
          <h4>作者简介</h4>
          <p>{book.author_intro}</p>
        </div>
    }
    return (
      <div className='book-detail'>
        <div>
          <h3>{book.title}</h3>
          <div className='clearfix'>
            <div className='pull-left'>
              <img className='book-detail--img' src={book.image}/>
            </div>
            <div className='book-detail--info'>
              <div>{authors}</div>
              <div>{publisher}</div>
              <div>{pubdate}</div>
              <div>{pages}</div>
              <div>{price}</div>
            </div>
          </div>
        </div>
        {summary}
        {author_intro}
      </div>
    );
  },

  _onChange: function() {
    this.setState(getStateFromStores());
  }

});

module.exports = BookDetail;
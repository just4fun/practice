var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var BookItem = React.createClass({

  render: function() {
    return (
      <Link to='book-detail' params={{bookId: this.props.book.id}} className='main-section__book clearfix'>
        <div className='pull-left'>
          <img className='main-section__book-img' src={this.props.book.image}/>
        </div>
        <div className='main-section__book-info pull-left'>
          <div className='main-section__book-title' title={this.props.book.title}>{this.props.book.title}</div>
        </div>
      </Link>
    );
  }

});

module.exports = BookItem;
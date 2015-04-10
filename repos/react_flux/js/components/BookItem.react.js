var React = require('react');

var BookItem = React.createClass({

  render: function() {
    return (
      <a className="main-section__book clearfix">
        <div className='pull-left'>
          <img className='main-section__book-img' src={this.props.book.image}/>
        </div>
        <div className='main-section__book-info pull-left'>
          <span className='main-section__book-title'>{this.props.book.title}</span>
        </div>
      </a>
    );
  }

});

module.exports = BookItem;
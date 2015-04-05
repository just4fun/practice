var React = require('react');

var Header = React.createClass({
  render: function() {
    return (
      <header className="navbar navbar-fixed-top">
        <div className="container">
          <div className="navbar__search">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Search for books..." />
              <span className="input-group-btn">
                <button className="btn btn-default" type="button">
                  <i className="glyphicon glyphicon-search"></i>
                </button>
              </span>
            </div>
          </div>
        </div>
      </header>
    );
  }
});

module.exports = Header;
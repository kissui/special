
'use strict';

var React = require('react');

module.exports = React.createClass({
  displayName: 'Layout',

  render: function render() {
    return (
      <html>
        <head>
          <meta charSet='utf-8' />
          <title>React Engine Example App</title>
          <link rel='stylesheet' href='/styles.css'/>
        </head>
        <body>
          <div>

            {this.props.children}
          </div>
          <script src='/bundle.js'></script>
        </body>
      </html>
    );
  }
});

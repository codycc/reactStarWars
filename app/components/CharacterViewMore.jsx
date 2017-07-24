var React = require('react');

var CharacterViewMore = React.createClass({
  onCharactersLoad: function() {
    this.props.onCharactersLoad()
  },
  render: function() {
    return (
      <button onClick={this.onCharactersLoad}>View More Characters</button>
    )
  }
})
module.exports = CharacterViewMore;

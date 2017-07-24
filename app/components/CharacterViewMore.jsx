var React = require('react');
var $ = require('jquery');

var CharacterViewMore = React.createClass({
  onCharactersLoad: function() {
    this.props.onCharactersLoad()
  },
  render: function() {

    return (
      <div>
        <button className="character-view-more" onClick={this.onCharactersLoad}>View More Characters</button>
      </div>
    )
  }
})
module.exports = CharacterViewMore;

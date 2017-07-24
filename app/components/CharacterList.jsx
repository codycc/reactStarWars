var React = require('react');
var CharacterCard = require('CharacterCard');

var CharacterList = React.createClass({
  render: function() {
    var {characters} = this.props;
    var renderCharacters = () => {
      return characters.map((character) => {
        return (
          <CharacterCard key={character.id} {...character} onCharacterSelect={this.props.onCharacterSelect} onLike={this.props.onLike} onDislike={this.props.onDislike}/>
        );
      });
    };
    return (
      <div className="list-container">
        {renderCharacters()}
      </div>
    );
  }
});

module.exports = CharacterList;

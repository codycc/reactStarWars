var React = require('react');
var CharacterSearch = require('CharacterSearch');
var CharacterList = require('CharacterList');
var CharacterViewMore = require('CharacterViewMore');


var CharacterListView = React.createClass({
  render: function() {

    var {characters} = this.props
    return (
      <div>
        <CharacterSearch onSearch={this.props.onSearch}/>
        <CharacterList characters={characters} onCharacterSelect={this.props.onCharacterSelect} onLike={this.props.onLike} onDislike={this.props.onDislike}/>
        <CharacterViewMore onCharactersLoad={this.props.onCharactersLoad} />
      </div>
    );
  }
});
module.exports = CharacterListView;

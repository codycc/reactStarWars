var React = require('react');

var CharacterSearch = React.createClass({
  handleSearch: function() {
    var characterSearchValue = this.refs.characterSearchValue.value;
    this.props.onSearch(characterSearchValue);
  },
  render: function() {
    return (
      <div className="character-search">
        <input type="search" ref="characterSearchValue" placeholder="Search Characters" onChange={this.handleSearch}/>
      </div>
    );
  }
});

module.exports = CharacterSearch;

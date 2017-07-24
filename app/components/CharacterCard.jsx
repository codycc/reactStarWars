var React = require('react');
var CharacterRating = require('CharacterRating');
var {Link} = require('react-router');

var CharacterCard = React.createClass({
  onCharacterSelect: function() {
    this.props.onCharacterSelect(this.props.id)
  },
  render: function() {
    var {id, rating, name, homeWorldName} = this.props;

    return (
      <div className="card-container">
        <div className="character-card">
          <h2>{name}</h2>
          <p>Planet of Origin:<span className="supporting-text">{homeWorldName}</span></p>
          <h3><span className="rating">%{rating}</span></h3>
          <Link to="/detail" onClick={this.onCharacterSelect}><span className="more-info">View Detail</span></Link>
          <CharacterRating id={this.props.id} likes={this.props.likes} dislikes={this.props.dislikes} onLike={this.props.onLike} onDislike={this.props.onDislike}/>
        </div>
      </div>
    );
  }
});

module.exports = CharacterCard;

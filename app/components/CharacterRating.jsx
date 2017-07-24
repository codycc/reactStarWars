var React = require('react');

var CharacterRating = React.createClass({
  render: function() {
    var {id, likes, dislikes} = this.props;
    return(
      <div className="character-rating">
          <div onClick={() => {
            this.props.onLike(id)
          }}>
            <button className="button-left" >Like {likes}</button>
          </div>
          <div onClick={() => {
            this.props.onDislike(id)
          }}>
            <button className="button-right">Dislike {dislikes}</button>
          </div>
      </div>
    );
  }
});

module.exports = CharacterRating;

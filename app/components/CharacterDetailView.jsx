var React = require('react');
var CharacterComment = require('CharacterComment');
var {Link} = require('react-router');

var CharacterDetailView = React.createClass({

  render: function() {
    var {
      name,
      height,
      mass,
      hair_color,
      skin_color,
      eye_color,
      birth_year,
      gender,
      speciesName,
      homeWorldName,
      filmNames,
      vehicleNames,
      starShipNames,
      comments

    } = this.props;

    var unwrapFilms = filmNames.map((film) => {
        return (
        <li key={film }><p>{film}</p></li>
        )
    })
    var unwrapVehicles = vehicleNames.map((vehicle) => {
        return (
          <li key={vehicle }><p>{vehicle}</p></li>
        )
    })
    var unwrapStarShips = starShipNames.map((starship) => {
        return (
          <li key={starship }><p>{starship}</p></li>
        )
    })

    return (
      <div className="character-detail">
        <div className="character-full-info">
          <Link to="/">Back</Link>
        <p>Name:<span>{name}</span></p>
        <p>Height:<span>{height}</span></p>
        <p>Mass:<span>{mass}</span></p>
        <p>Hair Color:<span>{hair_color}</span></p>
        <p>Skin Color:<span>{skin_color}</span></p>
        <p>Eye Color:<span>{eye_color}</span></p>
        <p>Birth Year:<span>{birth_year}</span></p>
        <p>Gender:<span>{gender}</span></p>
        <p>Species:<span>{speciesName}</span></p>
        <p>Planet Of Origin:<span>{homeWorldName}</span></p>
        <br/>
        <p className="title">Films:</p>
         <ul>{unwrapFilms}</ul>

        <p className="title">Vehicles:</p>
        <ul> {unwrapVehicles}</ul>

        <p className="title">starShipNames:</p>
        <ul> {unwrapStarShips}</ul>


      </div>

          <CharacterComment id={this.props.id} comments={this.props.comments} onCommentSubmit={this.props.onCommentSubmit} />

      </div>
    );
  }
});

module.exports = CharacterDetailView;

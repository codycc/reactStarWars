var axios = require('axios');

var STAR_WARS_PEOPLE_BASE_URL = 'http://swapi.co/api/people/?page=';
const STAR_WARS_FILMS_URL = 'http://swapi.co/api/films/';
const STAR_WARS_STARSHIPS_URL = 'http://swapi.co/api/starships/';
const STAR_WARS_VEHICLES_URL = 'http://swapi.co/api/vehicles/';
const STAR_WARS_SPECIES_URL = 'http://swapi.co/api/species/';

module.exports = {
  getCharacterInfo: function(that, APIPageNumber) {
    var STAR_WARS_PEOPLE_FULL_URL = `${STAR_WARS_PEOPLE_BASE_URL} + ${APIPageNumber}`
    return axios.get(STAR_WARS_PEOPLE_FULL_URL).then(function(res) {
      if(res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        var updatedCharacterInformation = res.data.results.map((character) => {

          //GRABBING CHARACTER HOMEWORLD
          var characterHomeWorldURL = character.homeworld;
          axios.get(characterHomeWorldURL).then(function(res) {
            if(res.data.cod && res.data.message) {
              throw new Error(res.data.message);
            } else {
              character.homeWorldName = res.data.name
              that.forceUpdate();
            }
          }, function(err) {
            throw new Error('Unable to grab plaent of origin')
          })

          //GRABBING CHARACTER SPECIES
          var characterSpeciesUrl = character.species;
          axios.get(characterSpeciesUrl).then(function(res) {
            if(res.data.cod && res.data.message) {
              throw new Error(res.data.message);
            } else {
              character.speciesName = res.data.name
              return
            }
          }, function(err) {
            throw new Error('Unable to grab plaent of origin')
          })


          // GRABBING CHARACTER FILMS
          var characterFilmsUrls = character.films;
          characterFilmsUrls.forEach((filmUrl) => {
            axios.get(filmUrl).then(function(res) {
              if(res.data.cod && res.data.message) {
                throw new Error(res.data.message);
              } else {
                character.filmNames.push(res.data.title)
              }
            }, function(err) {
              throw new Error('Unable to grab plaent of origin')
            })
          })

          // GRABBING CHARACTER STARSHIPS
          var characterStarShipUrls = character.starships;
          characterStarShipUrls.forEach((starShipUrl) => {
            axios.get(starShipUrl).then(function(res) {
              if(res.data.cod && res.data.message) {
                throw new Error(res.data.message);
              } else {
                character.starShipNames.push(res.data.name)
              }
            }, function(err) {
              throw new Error('Unable to grab plaent of origin')
            })
          })

          // GRABBING CHARACTER VEHICLES
          var characterVehicleUrls = character.vehicles;
          characterVehicleUrls.forEach((vehicleUrl) => {
            axios.get(vehicleUrl).then(function(res) {
              if(res.data.cod && res.data.message) {
                throw new Error(res.data.message);
              } else {
                character.vehicleNames.push(res.data.name)
              }
            }, function(err) {
              throw new Error('Unable to grab plaent of origin')
            })
          })

          return character
        })
        return updatedCharacterInformation

      }
    }, function(err) {
      throw new Error('Unable to grab characters')
    })
  },
  filterCharacters: function(characters, searchText) {
    var filteredCharacters = characters;

    filteredCharacters = filteredCharacters.filter((character) => {
      var characterName = character.name.toLowerCase();
      return searchText.length === 0 || characterName.indexOf(searchText) > -1;
    })

    filteredCharacters = filteredCharacters.sort((a,b) => {
      return b.rating - a.rating;
    })
    return filteredCharacters;
  }
}

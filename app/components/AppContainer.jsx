var React = require('react');
var CharacterListView = require('CharacterListView');
var CharacterDetailView = require('CharacterDetailView');
var CharacterSearch = require('CharacterSearch');
var CharacterComment = require('CharacterComment');
var starWarsAPI = require('starWarsAPI');
var uuid = require('node-uuid');


var AppContainer = React.createClass({
  getInitialState: function() {
    return {
      searchText: '',
      characters: [],
      selectedCharacter: [],
      APIPageNumber: 1
    }
  },
  loadCharacters: function() {
    var that = this;
    var {APIPageNumber} = this.state;
    if(APIPageNumber <= 8) {
      starWarsAPI.getCharacterInfo(this,APIPageNumber).then(function(charactersInfo) {
        console.log('in app container')
        var updatedResults = charactersInfo.map((characterInfo) => {
          //setting default propertys on each character
          characterInfo["id"] = uuid();
          characterInfo["likes"] = 0;
          characterInfo["dislikes"] = 0;
          characterInfo["rating"] = 100;
          characterInfo["totalVotes"] = 0;
          characterInfo["comments"] = [];
          characterInfo["filmNames"] = [];
          characterInfo["starShipNames"] = [];
          characterInfo["vehicleNames"] = [];
          characterInfo["speciesName"] = '';
          console.log(characterInfo, 'iinfo')
          that.setState({
            characters: [
              ...that.state.characters,
              characterInfo
            ]
          });
        })
      }, function(e) {
        console.log(e,'an error')
      });
      // 
      // starWarsAPI.getCharacterInfo(this, APIPageNumber).then(function(characterDetail) {
      //   console.log(characterDetail, 'detail')
      //   var updatedResults = characterDetail.map((character) => {
      //     that.setState({
      //       characters: [
      //         ...that.state.characters,
      //         character
      //       ]
      //     });
      //   });
      // }, function(e) {
      //   console.log(e,'an error')
      // })

      this.setState({
        APIPageNumber: APIPageNumber + 1
      })



    } else {
      this.setState({
        APIPageNumber: 8
      })
    }
  },
  handleCharactersLoad: function() {
    this.loadCharacters()
  },
  componentDidMount: function() {
    this.loadCharacters()
  },

  handleLike: function(id) {
    var updatedCharacterVotes = this.state.characters.map((character) => {
      if(character.id === id ) {
        character.likes = character.likes + 1;
        character.totalVotes =  character.totalVotes + 1;
        character.rating = Math.round((character.likes / character.totalVotes) * 100);
      }
      return character;
    });
    this.setState({
      characters: updatedCharacterVotes
    })
  },
  handleDislike: function(id) {
    var updatedCharacterVotes = this.state.characters.map((character) => {
      if(character.id === id) {
        character.dislikes = character.dislikes +1;
        character.totalVotes =  character.totalVotes + 1;
        character.rating = Math.round((character.likes / character.totalVotes) * 100);
      }
      return character;
    })
    this.setState({
      characters: updatedCharacterVotes
    })
  },
  handleSearch: function(searchText) {
    this.setState({
      searchText: searchText.toLowerCase()
    })
  },
  handleCharacterSelect: function(id) {
    var selectedCharacter = this.state.characters.map((character) => {
      if (character.id === id) {
        this.setState({
          selectedCharacter: [character]
        })
      }
    })
  },
  handleCommentSubmit: function(comment,id) {
    var addCharacterComment = this.state.characters.map((character) => {
      if(character.id === id) {
        character.comments.push(comment)
        return character
      }
    })
    this.setState(addCharacterComment)
  },
  render: function() {
    var {selectedCharacter} = this.state;
    var characterObject = selectedCharacter[0];
    var {characters, searchText} = this.state;
    var filteredCharacters = starWarsAPI.filterCharacters(characters, searchText);
    //style


    const childrenWithProps = React.Children.map(this.props.children,
     (child) => React.cloneElement(child, {
       onSearch: this.handleSearch,
       characters: filteredCharacters,
       onCharacterSelect: this.handleCharacterSelect,
       onLike: this.handleLike,
       onDislike: this.handleDislike,
       onCommentSubmit: this.handleCommentSubmit,
       onCharactersLoad: this.handleCharactersLoad,
       ...characterObject
     })
    );
    return (
      <div className="app-container">
          {childrenWithProps}
      </div>
    );
  }
})

module.exports = AppContainer;

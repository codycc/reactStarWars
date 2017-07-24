var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var AppContainer = require('AppContainer');
var CharacterListView= require('CharacterListView');
var CharacterDetailView = require('CharacterDetailView');


//app css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={AppContainer}>
      <IndexRoute component={CharacterListView}/>
      <Route path="detail" component={CharacterDetailView}/>
    </Route>
  </Router>,
  document.getElementById('app')
);

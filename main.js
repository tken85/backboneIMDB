var $ = require('jquery');
var MovieCollection = require('./movieCollection');
var MovieView = require('./movieModelView');
var MovieCollectionView = require('./movieCollectionView');
var LayoutView = require('./layoutView');


$(document).ready(function(){
  /*var movies = new MovieCollection();

  movies.fetch().then(function(data){
    console.log("these are the movies: ", movies);
    new MovieCollectionView({collection: movies});


  });*/
  new LayoutView();

});

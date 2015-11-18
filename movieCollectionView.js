var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
Backbone.$ = $;
var MovieView = require('./movieModelView');
var MovieModel = require('./movieModel');

module.exports = Backbone.View.extend({
  el:"#movies",
  events: {
    'click .showForm': 'formAppear',
    'submit #newMovie': 'addMovie',
  },
  formAppear: function(event){
    event.preventDefault();
    $('#newMovie').toggleClass('hidden');
  },
  addMovie: function(event){
    event.preventDefault();
    var name = $('input[name="title"]').val();
    var cover = $('input[name="cover"]').val();
    var synopsis = $('input[name="plot"]').val();
    var releaseD = $('input[name="release"]').val();
    var rating5 = $('input[name="rating"]').val();
    var that = this;
    var newMovie = new MovieModel({title: name, cover_URL: cover, plot: synopsis, release: releaseD, rating: rating5});
    newMovie.save().then(function(){that.addOne(newMovie);});
    $('input[class="new"]').val("");
  },
  initialize: function(){
    this.addAll();
  },
  addOne: function(movieModel){
    var movieView = new MovieView({model: movieModel});
    this.$el.append(movieView.render().el);
  },
  addAll: function(){
    _.each(this.collection.models, this.addOne, this);
  },
});

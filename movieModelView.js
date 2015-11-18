var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
Backbone.$ = $;


module.exports = Backbone.View.extend({
  tagname:"article",
  className: "",
  template: _.template($('#movieTmpl').html()),
  events:{
    'click .deleteMovie': 'deleteMovie',
    'click .editMovie' : 'editMovie',
    'submit .fixMovie' : 'fixMovie'
  },
  deleteMovie: function(event){
    event.preventDefault();
    //this.$el.html("");
    this.model.destroy();
    this.$el.remove();
  },
  editMovie: function(event){
    event.preventDefault();
    var edittedMovie = this.model;
    $('.fixMovie').toggleClass('hidden');
    /*edittedMovie.set({release: 1999});
    edittedMovie.save();
    this.render();*/

  },
  fixMovie: function(event){
    event.preventDefault();
    var name = $('input[name="edTitle"]').val();
    var cover = $('input[name="edCover"]').val();
    var synopsis = $('input[name="edPlot"]').val();
    var releaseD = $('input[name="edRelease"]').val();
    var rating5 = $('input[name="edRating"]').val();
    var editedMovie = this.model;
    editedMovie.set({title: name, cover_URL: cover, plot: synopsis, release: releaseD, rating: rating5});
    $('.fixMovie').addClass('hidden');
    editedMovie.save();
    this.render();
  },
  render: function(){
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup);
    return this;
  },
  initialize: function(){

  },
});

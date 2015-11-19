var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
Backbone.$ = $;
var tmpl = require('./templates');


module.exports = Backbone.View.extend({
  tagname:"article",
  className: "",
  //template: _.template($('#movieTmpl').html()),
  template: _.template(tmpl.movieTmpl),
  events:{
    'click .deleteMovie': 'deleteMovie',
    'click .editMovie' : 'editMovie',
    'submit .fixMovie' : 'fixMovie'
  },
  deleteMovie: function(event){
    event.preventDefault();
    this.model.destroy();
    this.$el.remove();
  },
  editMovie: function(event){
    event.preventDefault();
    var edittedMovie = this.model;
    this.$('.fixMovie').toggleClass('hidden');

  },
  fixMovie: function(event){
    event.preventDefault();
    var name = this.$('input[name="edTitle"]').val();
    var cover = this.$('input[name="edCover"]').val();
    var synopsis = this.$('input[name="edPlot"]').val();
    var releaseD = this.$('input[name="edRelease"]').val();
    var rating5 = this.$('input[name="edRating"]').val();
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

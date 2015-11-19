var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');
var tmpl = require('./templates');
var MovieModel = require('./movieModel');
var MovieView = require('./movieModelView');
var MovieCollection = require('./movieCollection');
//var MovieCollectionView = require('./movieCollectionView');


module.exports = Backbone.View.extend({
  className: "",
  template: _.template(tmpl.form),
  model: null,
  movTemplate: _.template(tmpl.movieTmpl),
  events:{
    'click .showForm': 'onFormAppear',
    'submit #newMovie' : 'onAddMovie'
  },
  onFormAppear: function(event){
    event.preventDefault();
    $('#newMovie').toggleClass('hidden');
  },
  onAddMovie: function(event){
    event.preventDefault();
    var name = $('input[name="title"]').val();
    var cover = $('input[name="cover"]').val();
    var synopsis = $('input[name="plot"]').val();
    var releaseD = $('input[name="release"]').val();
    var rating5 = $('input[name="rating"]').val();
    var that = this;
    $('input[class="new form-control"]').val("");
    var newMovie = new MovieModel({title: name, cover_URL: cover, plot: synopsis, release: releaseD, rating: rating5});
    newMovie.save().then(function(){
      that.collection.add(newMovie);
    });
  },
  initialize: function(){
    if(!this.model){
      this.model = new MovieModel();
    }
    if(!this.collection){
      this.collection = new MovieCollection();
    }
    console.log("form collect: ", this.collection);
  },
  render: function(){
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup);
    return this;
  },
  //the below is not used at this time. was being explored for faster loading
  renderSubmitted: function(){
    var markup = this.movTemplate(this.model.toJSON());
    $('.content').prepend(markup);
    return this;
  }

});

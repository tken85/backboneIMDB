var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _= require('underscore');
var HeaderView = require('./headerView');
var FormView = require('./formView');
var SortView = require('./sortView');
var MovieCollectionView = require('./movieCollectionView');
var MovieCollection = require('./movieCollection');

module.exports = Backbone.View.extend({
  el: '#layoutView',
  initialize: function(){
    var self= this;
    var headerHTML = new HeaderView();
    var formHTML = new FormView();
    var sortHTML = new SortView();
    var movieCollection = new MovieCollection();
    movieCollection.fetch().then(function(){
      new MovieCollectionView({collection: movieCollection});

      console.log("collection", movieCollection.toJSON());
    //  self.$el.find('.content').html(moviesView);
      console.log(self.$el.find('.content'));
      self.$el.find('header').html(headerHTML.render().el);
      self.$el.find('.form').html(formHTML.render().el);
      self.$el.find('.sortButtons').html(sortHTML.render().el);

    });



  }


});

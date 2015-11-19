var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
Backbone.$ = $;
var MovieView = require('./movieModelView');
var MovieModel = require('./movieModel');

module.exports = Backbone.View.extend({
  el:".content",
  initialize: function(){
    this.addAll();
    this.listenTo(this.collection, 'add', this.addAll);
  },
  addOne: function(movieModel){
    var movieView = new MovieView({model: movieModel});
    this.$el.append(movieView.render().el);
  },
  addAll: function(){
    $('.content').html("");
    _.each(this.collection.models, this.addOne, this);
  },
});

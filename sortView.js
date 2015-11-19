var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');
var tmpl = require('./templates');
var MovieModel = require('./movieModel');
var MovieView = require('./movieModelView');
var MovieCollection = require('./movieCollection');
var MovieCollectionView = require('./movieCollectionView');


module.exports = Backbone.View.extend({
  className: "",
  template: _.template(tmpl.sorting),
  model: null,
  events:{
    'click .sortDate' : 'onSortDate',
    'click .sortRating' : 'onSortRating',
    'click .sortTitle' : 'onSortTitle'
  },
  onSortDate: function(event){
    event.preventDefault();
    var that = this;
    $('article').remove();
    this.collection.fetch().then(function(){
      that.collection.comparator='release';
      that.collection.sort();
      new MovieCollectionView({collection: that.collection});
    });
  },
  onSortRating: function(event){
    event.preventDefault();
    var that = this;
    $('article').remove();
    this.collection.fetch().then(function(){
      that.collection.comparator='rating';
      that.collection.sort();
      new MovieCollectionView({collection: that.collection});
    });
  },
  onSortTitle: function(event){
    event.preventDefault();
    var that = this;
    $('article').remove();
    this.collection.fetch().then(function(){
      that.collection.comparator='title';
      that.collection.sort();
      new MovieCollectionView({collection: that.collection});
    });
  },
  initialize: function(){
    if(!this.model){
      this.model = new MovieModel();
    }
    if(!this.collection){
      this.collection = new MovieCollection();
    }
  },
  render: function(){
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup);
    return this;
  },

});

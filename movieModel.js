var _ = require('underscore');
var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  urlRoot: "http://tiny-tiny.herokuapp.com/collections/instaTerryIMDB",
  idAttribute: '_id',
  defaults:{
    title:"Movie",
    cover_URL:"images/bam.png",
    plot: "Stuff blows up good!",
    release: "1985",
    rating: 2,
  },
  initialize: function(){

  }
});

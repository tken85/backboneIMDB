var Backbone = require('backbone');
var MovieModel = require('./movieModel');

module.exports = Backbone.Collection.extend({
  url: "http://tiny-tiny.herokuapp.com/collections/instaTerryIMDB",
  model: MovieModel,
  config: function(){

  },
  initialize: function(){
    console.log(this);
  },
});

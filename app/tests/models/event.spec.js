'use strict';

require('should');

var Model = require('../../models/event.js');

describe('Event Model', function(){
  it('should have an array of ratings', function(){
    var event = new Model();
    event.ratings.should.not.equal(undefined);
  });

  describe('when saving event', function(){
    beforeEach(function(){
      Model.prototype.save = function(callback){
        callback();
      };
    });

    it('should calculate average rating', function(){

      var event = new Model({
        ratings: [{
          rating: 1
        }, {
          rating: 2
        }]
      });

      event.save(function(){
        event.averageRating.should.equal(1.5);
      });
    });

    it('should set average rating of 0 if no ratings', function(){
      var event = new Model();
      event.save(function(){
        event.averageRating.should.equal(0);
      });
      
    });
  });
});

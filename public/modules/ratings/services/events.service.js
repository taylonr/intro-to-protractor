'use strict';

var app = angular.module('ratings');

app.factory('EventsService', ['$resource', '$q', eventsService]);

function eventsService($resource, $q){

  function getData(route, method){
    var deferred = $q.defer();

    var addr = ['http://localhost:3000/events',
                route].join('/');

    $resource(addr)[method]()
      .$promise
      .then(function(data){
        deferred.resolve(data);
      })
      .catch(function(error){
        deferred.reject(error);
      });

    return deferred.promise;
  }

  function create(event){
    var deferred = $q.defer();
    
    $resource('http://localhost:3000/events').save(event).$promise
      .then(function(){
        deferred.resolve();
      });

    return deferred.promise;
  }

  return{
    getAllEvents: function(){
      return getData('', 'query');
    },

    getSingleEvent: function(id){
      return getData(id, 'get');
    },

    addEvent: create
  };

}

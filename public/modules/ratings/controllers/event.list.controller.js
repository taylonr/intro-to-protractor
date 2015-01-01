'use strict';

var app = angular.module('ratings');

app.controller('EventListController',
  ['$scope', '$state', 'EventsService', controller]);

function controller($scope, $state, eventService){
  $scope.loading = true;

  $scope.getAllEvents = function(){
    eventService.getAllEvents().then(function(events){
      $scope.events = events;
    }).finally(function(){
      $scope.loading = false;
    });
  };

  $scope.selectEvent = function(id){
    $state.go('eventDetails', {eventId: id});
  };

  $scope.calculateRatingQuality = function(rating){
    if(rating < 2){
      return 'bad';
    } else if (rating <= 3.5){
      return 'ok';
    } else {
      return 'good';
    }
  };

  $scope.getAllEvents();
}

'use strict';

angular.module('ratings').controller('EventDetailsController',
  ['$scope','$stateParams', 'EventsService', controller]);

function controller($scope, $stateParams, EventsService){
  $scope.loading = true;

  $scope.getEvent = function(id){
    EventsService.getSingleEvent(id)
    .then(function(detail){
      $scope.eventDetails = detail;
    })
    .finally(function(){
      $scope.loading = false;
    });
  };

  $scope.getEvent($stateParams.eventId);
}

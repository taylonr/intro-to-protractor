(function() {
  'use strict';

  angular.module('ratings').controller('EventCreateController',
    ['$scope', '$state', 'EventsService', controller]);

  function controller($scope, $state, EventsService){
    $scope.item = {};

    $scope.submit = function(){
      EventsService.addEvent($scope.item).then(function(){
        $state.go('events');
      });
    };
  }

}());

'use strict';

angular.module('ratings').config(['$stateProvider', ratingsRoutes]);

function ratingsRoutes($stateProvider){
  $stateProvider
  .state('events', {
    url: '/EventRatings',
    templateUrl: 'modules/ratings/views/event.list.html',
    controller: 'EventListController'
  })
  .state('eventsCreate', {
    url: '/EventRatings/new',
    templateUrl: 'modules/ratings/views/event.create.html',
    controller: 'EventCreateController'
  })
  .state('eventsDetails', {
    url: '/EventRatings/:eventId',
    templateUrl: 'modules/ratings/views/event.details.html',
    controller: 'EventDetailsController'
  });
}

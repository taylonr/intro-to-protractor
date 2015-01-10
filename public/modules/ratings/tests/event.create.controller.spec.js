'use strict';

describe('Event Create Controller: ', function(){
  var EventService,
  $q,
  $rootScope,
  serviceSpy,
  deferred,
  $state,
  scope;

  beforeEach(module(ApplicationConfiguration.applicationModuleName));

  beforeEach(module(function($provide){
    EventService = {
      addEvent: function(){}
    };

    $provide.value('EventsService', EventService);
  }));

  beforeEach(inject(function(_$rootScope_, $controller, _$q_,
    $httpBackend, _$state_){

      $rootScope = _$rootScope_;
      scope = $rootScope.$new();

      $httpBackend.whenGET('modules/core/views/home.client.view.html')
      .respond(200);

      $state = _$state_;
      spyOn($state, 'go');

      $q = _$q_;
      deferred = $q.defer();

      spyOn(EventService, 'addEvent').and.returnValue(deferred.promise);

      $controller('EventCreateController', {
        $scope: scope
      });
  }));

  describe('When saving data', function(){
    it('Should call to the service', function(){
      scope.submit();
      expect(EventService.addEvent).toHaveBeenCalled();
    });

    it('Should redirect to the list page', function(){
      scope.submit();
      deferred.resolve();

      $rootScope.$digest();
      expect($state.go).toHaveBeenCalledWith('events');
    });
  });
});

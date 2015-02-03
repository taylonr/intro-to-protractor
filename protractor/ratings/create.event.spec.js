describe('Creating an event', function(){
  describe('When the form is invalid', function(){
    it('should have the submit button disabled', function(){
      browser.get('http://localhost:3000/#!/EventRatings/new');

      var button = element(by.buttonText('Create'));

      var css = button.getAttribute('class');

      expect(css).toMatch('disabled');
    });
  });

  describe('and specifying the name', function(){
    it('should enable the create button', function(){
      browser.get('http://localhost:3000/#!/EventRatings/new');

      var name = element(by.model('event.name')).sendKeys('A Sample Event');

      expect(element(by.buttonText('Create')).getAttribute('class')).not.toMatch('disabled');
    });
  });

  describe('and saving the event', function(){
    it('should add it to the event list', function(){
      browser.get('http://localhost:3000/#!/EventRatings/new');

      var name = element(by.model('event.name')).sendKeys('My New Event');

      element(by.buttonText('Create')).click();

      browser.waitForAngular();

      var list = element.all(by.binding('name'));

      expect(list.getText()).toMatch('My New Event');

    });
  });
});

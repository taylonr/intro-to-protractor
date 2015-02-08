describe('Adding a new event', function(){
  var button,
    css;

  beforeEach(function(){
      browser.get('http://localhost:3000/#!/EventRatings/new');
      button = element(by.buttonText('Create'));
  });

  describe('When the form is empty', function(){
    it('Should disable the Create button', function(){
      var css = button.getAttribute('class');

      expect(css).toMatch('disabled');
    });
  });

  describe('When specifying the name', function(){
    it('Should enable the Create button', function(){
      element(by.model('event.name')).sendKeys('A Sample Event');

      var css = button.getAttribute('class');

      expect(css).not.toMatch('disabled');
    });
  });

  describe('When saving the form', function(){
    it('Should add the event to the list', function(){
      element(by.model('event.name')).sendKeys('Module 3');

      button.click();

      browser.waitForAngular();

      var list = element.all(by.binding('name'));

      expect(list.getText()).toMatch('Module 3');
    });
  });
});

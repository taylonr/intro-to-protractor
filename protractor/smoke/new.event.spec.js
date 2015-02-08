describe('Creating New Event', function(){
  describe('When clicking the button', function(){
    it('Should route to the new event page', function(){
      browser.get('http://localhost:3000/#!/EventRatings');

      element(by.buttonText('New Event')).click();

      expect(browser.getCurrentUrl()).toMatch('EventRatings/new');
    });
  });
});

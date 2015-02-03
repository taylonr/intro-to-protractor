describe('New Event screen: ', function(){
  describe('When clicking the New Event button', function(){
    it('should redirect to a new url', function(){
      browser.get('http://localhost:3000/#!/EventRatings');
      element(by.buttonText('New Event')).click();

      expect(browser.getCurrentUrl()).toMatch('EventRatings/new');
    });
  });
});

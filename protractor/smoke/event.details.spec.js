describe('Event Details:', function(){
  describe('Ratings Block:', function(){
    var ratings;

    beforeEach(function(){
      browser.get('http://localhost:3000/#!/EventRatings/540d090f92ce4386636a3069');
      ratings = element.all(by.repeater('r in eventDetails.ratings'));
    });

    it('Should show ratings', function(){
      expect(ratings.count()).toBe(6);
    });

    it('Should have a description', function(){
      var x = element.all(by.repeater('r in eventDetails.ratings').column('description'));
      expect(x.getText()).toBeDefined();
    });
  });
});

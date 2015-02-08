describe('Event Details', function(){
  describe('Ratings Block', function(){
    beforeEach(function(){
      browser.get('http://localhost:3000/#!/EventRatings/540d090f92ce4386636a3069');
    });

    it('Should show all ratings', function(){
      var ratings = element.all(by.repeater('r in eventDetails.ratings'));

      expect(ratings.count()).toBe(6);
    });

    it('Should have a description', function(){
        var descriptions = element.all(by.repeater('r in eventDetails.ratings')
          .column('description'));

        expect(descriptions.getText()).toMatch('Waste of time');
    });
  });
});

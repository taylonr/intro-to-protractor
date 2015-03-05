describe('A really long test', function(){
  it('Should take a long time', function(){
    browser.get('http://localhost:3000/#!/EventRatings');
    browser.driver.sleep(10000);
  });
});

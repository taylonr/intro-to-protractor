var CreatePage = require('./pages/create.event.page.js'),
    ListPage = require('./pages/event.list.page.js');

describe('Adding a new event', function(){
  var css,
    createPage = new CreatePage(),
    listPage = new ListPage();

  beforeEach(function(){
      browser.get('http://localhost:3000/#!/EventRatings/new');
  });

  describe('When the form is empty', function(){
    it('Should disable the Create button', function(){
      var css = createPage.getButtonClasses();

      expect(css).toMatch('disabled');
    });
  });

  describe('When specifying the name', function(){
    it('Should enable the Create button', function(){
      createPage.setName('A Sample Event');

      var css = createPage.getButtonClasses();

      expect(css).not.toMatch('disabled');
    });

    describe('When the name is too short', function(){
      it('Should disable the create button', function(){
        createPage.setName('ABC');

        var css = createPage.getButtonClasses();

        expect(css).toMatch('disabled');
      });
    });

    describe('When the name is too long', function(){
      it('Should disable the create button', function(){
        createPage.setName('abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz')

        var css = createPage.getButtonClasses();

        expect(css).toMatch('disabled');
      });
    });
  });

  describe('When saving the form', function(){
    it('Should add the event to the list', function(){
      createPage.setName('Module 3');

      createPage.saveData();

      browser.waitForAngular();

      expect(listPage.getNameTexts()).toMatch('Module 3');
    });
  });
});

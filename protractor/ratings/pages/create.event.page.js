module.exports = function(){
  this.name = element(by.model('item.name'));

  this.button = element(by.buttonText('Create'));

  this.getButtonClasses = function(){
    return this.button.getAttribute('class');
  }

  this.setName = function(name){
    this.name.sendKeys(name);
  }

  this.saveData = function(){
    this.button.click();
  }
}

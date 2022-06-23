const { By } = require('selenium-webdriver');

const Page = require('./page');

class TextInputPage extends Page {
  constructor() {
    super();

    this.newNameInput = By.id('newButtonName');
    this.button = By.id('updatingButton');
  }

  async open() {
    await super.open('http://uitestingplayground.com/textinput');
  }

  async changeButtonName(name) {
    await this.driver.findElement(this.newNameInput).sendKeys(name);
    await this.driver.findElement(this.button).click();
  }

  async getNewButtonName() {
    return this.driver.findElement(this.button).getText();
  }
}

module.exports = TextInputPage;

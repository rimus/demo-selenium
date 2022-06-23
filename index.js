require('chromedriver');

const { Builder, By } = require('selenium-webdriver');
const { Options } = require('selenium-webdriver/chrome');
const assert = require('assert');

(async () => {
  const chromeOptions = new Options().addArguments('--log-level=3');
  const driver = await new Builder().forBrowser('chrome').setChromeOptions(chromeOptions).build();
  await driver.get('http://uitestingplayground.com/textinput');
  await driver.manage().setTimeouts({ implicit: 1000 });
  await driver.findElement(By.id('newButtonName')).sendKeys('Selenium');
  await driver.findElement(By.id('updatingButton')).click();
  const newButtonName = await driver.findElement(By.id('updatingButton')).getText();
  assert.deepStrictEqual(newButtonName, 'Selenium');
  await driver.quit();
})();

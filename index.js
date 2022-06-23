require('chromedriver');

const { Builder, By } = require('selenium-webdriver');
const { Options } = require('selenium-webdriver/chrome');
const assert = require('assert');

(async () => {
  const chromeOptions = new Options().addArguments('--log-level=3');
  const driver = await new Builder().forBrowser('chrome').setChromeOptions(chromeOptions).build();
  await driver.get('https://www.google.com');
  await driver.getTitle();
  await driver.manage().setTimeouts({ implicit: 1000 });
  let searchBox = await driver.findElement(By.name('q'));
  const searchButton = await driver.findElement(By.name('btnK'));
  await searchBox.sendKeys('Selenium');
  await searchButton.click();
  searchBox = await driver.findElement(By.name('q'));
  const value = await searchBox.getAttribute('value');
  assert.deepStrictEqual(value, 'Selenium');
  await driver.quit();
})();

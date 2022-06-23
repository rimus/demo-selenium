import 'chromedriver';

import { Builder, By } from 'selenium-webdriver';
import { deepStrictEqual } from 'assert';

(async () => {
  const driver = await new Builder().forBrowser('chrome').build();
  await driver.get('https://www.google.com');
  await driver.getTitle();
  await driver.manage().setTimeouts({ implicit: 1000 });
  let searchBox = await driver.findElement(By.name('q'));
  const searchButton = await driver.findElement(By.name('btnK'));
  await searchBox.sendKeys('Selenium');
  await searchButton.click();
  searchBox = await driver.findElement(By.name('q'));
  const value = await searchBox.getAttribute('value');
  deepStrictEqual(value, 'Selenium');
  await driver.quit();
})();

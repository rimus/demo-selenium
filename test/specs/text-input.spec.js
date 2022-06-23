const { expect } = require('chai');

const TextInputPage = require('../../pages/text-input-page');

describe('WebDriver', () => {
  const NAME = 'Page Object';

  let textInputPage;

  before(async () => {
    textInputPage = new TextInputPage();
    await textInputPage.open();
    await textInputPage.changeButtonName(NAME);
  });

  it('should change button name', async () => {
    const buttonName = await textInputPage.getNewButtonName();
    expect(buttonName).to.be.equal(NAME);
  });

  after(async () => {
    await textInputPage.close();
  });
});

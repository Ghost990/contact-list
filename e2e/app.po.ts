import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getDefaultText() {
    return element(by.cssContainingText
    ('div.nothing-selected', 'Please select a contact!')).getText();
  }

  getFirstContact() {
    return element(by.cssContainingText
    ('div', 'Battle')).getText();
  }

  getFirstContactPanel() {
    return element(by.css('panel-main-content'));
  }

}

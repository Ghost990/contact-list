import { AppPage } from './app.po';

describe('contact-list App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getDefaultText()).toEqual('Please select a contact!');
  });

  it('should open and view a particular contact', () => {
    page.navigateTo();
    page.getFirstContact().click();

    expect(page.getFirstContactPanel()).toBeTruthy();
  });
});

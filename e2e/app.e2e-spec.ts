import { WumexPage } from './app.po';

describe('wumex App', () => {
  let page: WumexPage;

  beforeEach(() => {
    page = new WumexPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

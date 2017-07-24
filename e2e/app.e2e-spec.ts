import { EpiplaylistPage } from './app.po';

describe('epiplaylist App', () => {
  let page: EpiplaylistPage;

  beforeEach(() => {
    page = new EpiplaylistPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

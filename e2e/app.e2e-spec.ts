import { AngularLolChampionSelectorPage } from './app.po';

describe('angular-lol-champion-selector App', () => {
  let page: AngularLolChampionSelectorPage;

  beforeEach(() => {
    page = new AngularLolChampionSelectorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

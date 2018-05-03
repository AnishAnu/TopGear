import { LearningPortalPage } from './app.po';

describe('learning-portal App', function() {
  let page: LearningPortalPage;

  beforeEach(() => {
    page = new LearningPortalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

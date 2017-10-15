import { HarmonixDJAngular2Page } from './app.po';

describe('harmonix-djangular2 App', () => {
  let page: HarmonixDJAngular2Page;

  beforeEach(() => {
    page = new HarmonixDJAngular2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

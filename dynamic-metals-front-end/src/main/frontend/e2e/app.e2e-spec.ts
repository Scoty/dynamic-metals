import { DynamicMetalsFrontEndPage } from './app.po';

describe('dynamic-metals-front-end App', () => {
  let page: DynamicMetalsFrontEndPage;

  beforeEach(() => {
    page = new DynamicMetalsFrontEndPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

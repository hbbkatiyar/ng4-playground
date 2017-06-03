import { Ng4PlaygroundPage } from './app.po';

describe('ng4-playground App', () => {
  let page: Ng4PlaygroundPage;

  beforeEach(() => {
    page = new Ng4PlaygroundPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});

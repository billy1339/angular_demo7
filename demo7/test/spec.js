var TitlePage = function() {
    this.titleHeader = element(by.tagName('h1'));
    this.titles = element.all(by.repeater('title in titles'));
    this.inputTitle = element(by.tagName('input'));
    this.submitBtn = element(by.id('newTitleClick'));
    // this.deleteBtn = element(by.linkTest('newTitleClick'));
    this.get = function() {
        browser.get('http://localhost:5000/index.html#/titles');
    };
};

describe('title page', function() {
    var titlePage;

    beforeEach(function() {
        titlePage = new TitlePage();
        titlePage.get();
    });

    it('should have a h1 tag with the correct text', function() {
        expect(titlePage.titleHeader.getText()).toEqual('Titles');
    });

    it('should have five titles', function() {
        expect(titlePage.titles.count()).toEqual(6);
    });

    it('should add a title', function() {
        expect(titlePage.titles.count()).toEqual(6);

        titlePage.inputTitle.sendKeys('CEO');

        titlePage.submitBtn.click();

        expect(titlePage.titles.count()).toEqual(7);
    });

    // it('should be able to be deleted', function() {

    // });
});

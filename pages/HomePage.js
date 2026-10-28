class HomePage {

    constructor(page){
        this.page = page;
        this.browseEventButon = page.getByText('Browse Events →'); 
        this.homeLink = page.getByRole('link',{name:'Home'});
    }

    async clickBrowseEventButton(){
        await this.browseEventButon.click();
    }

    async clickHomeLink(){
        await this.homeLink.click();
    }

    async clickAutomationMeetupBookNow() {

    const card = this.page
        .locator('article')
        .filter({
            has: this.page.getByRole('heading', {
                name: 'Automation Meetup',
                exact: true
            })
        });

    await card.getByRole('link', {
        name: 'Book Now',
        exact: true
    }).click();
}

}

module.exports = HomePage;
    





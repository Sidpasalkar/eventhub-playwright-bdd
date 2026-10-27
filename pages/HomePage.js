class HomePage {

    constructor(page){
        this.page = page;
        this.browseEventButon = page.getByText('Browse Events →');       
    }

    async clickBrowseEventButton(){
        await this.browseEventButon.click();
    }

}

module.exports = HomePage;
    







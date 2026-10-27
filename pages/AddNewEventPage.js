class AddNewEventPage{

    constructor(page){
        this.page = page;
        this.AddNewEventButton = page.getByRole('button', {name: 'Add New Event'});
    }

    async clickAddNewEventButton(){
        await this.AddNewEventButton.click();
    }
}

module.exports = AddNewEventPage;
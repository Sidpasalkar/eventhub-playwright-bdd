
const {Given, When, Then } = require('@cucumber/cucumber');
const HomePage = require ('../../pages/HomePage');
const AddNewEventPage = require ('../../pages/AddNewEventPage')
const CreateEventPage = require ('../../pages/CreateEventPage')



When ('I Click on Browse Events button', async function(){
    this.homepage = new HomePage(this.page)
    await this.homepage.clickBrowseEventButton();
})

When ('I Click on Add Event button',async function(){
    this.addeventpage = new AddNewEventPage(this.page)
    await this.addeventpage.clickAddNewEventButton();    
})

Then ('I See Add New Event Page', async function(){
    this.createeventpage = new CreateEventPage(this.page)
})

When ('I Enter events details',async function(dataTable){
    const data = dataTable.rowsHash();
    await this.createeventpage.addEventDetails(data);
})

When ('I CLick on Add Event button',async function(){
    await this.createeventpage.clickAddEvent();
})

Then ('I should See Event is created successfully', async function(){

})

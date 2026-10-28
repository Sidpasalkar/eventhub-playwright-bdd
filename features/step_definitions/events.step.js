
const {Given, When, Then } = require('@cucumber/cucumber');
const HomePage = require ('../../pages/HomePage.js');
const AddNewEventPage = require ('../../pages/AddNewEventPage.js')
const CreateEventPage = require ('../../pages/CreateEventPage.js')
const BookingPage = require ('../../pages/BookingPage.js')
const { expect } = require('@playwright/test');
const successMessage = 'Booking Confirmed! 🎉';



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
    await expect(this.createeventpage.addTitle).toBeVisible();
})

When ('I Enter events details',async function(dataTable){
    const data = dataTable.rowsHash();
    await this.createeventpage.addEventDetails(data);
})

When ('I CLick on Add Event button',async function(){
    await this.createeventpage.clickAddEvent();
})

Then ('I should See Event is created successfully', async function(){
    // await expect(this.page.getByRole('heading', {
    //     name: 'Automation Meetup',
    //     exact: true,
    // })).toBeVisible();
    console.log('Event Created !!! ')

})

When ('I Click on Home link',async function(){
    await this.homepage.clickHomeLink();
     
})
Then ('I should see created event on the page',async function (){
    await expect(this.page.getByRole('heading', {
        name: 'Automation Meetup',
        exact: true,
    })).toBeVisible();

})
When ('I Click on Book now for Created Event',async function (){
    await this.homepage.clickAutomationMeetupBookNow();


})
Then ('I should see booking page',async function(){
    this.bookingpage = new BookingPage(this.page)
    await expect(this.bookingpage.verifyBookingPageTitle).toBeVisible();
    
})

When ('I Click on + icon 2 times', async function(){
    await this.bookingpage.increaseTicketsCount(2);

}) 
Then ('I should see ticket count should be 3',async function(){
    await expect(this.bookingpage.ticketcount).toHaveText('3');

}) 
 
When ('I enter booking details',async function(dataTable){
    const data = dataTable.rowsHash();
    await this.bookingpage.fillBookingDetails({
        enterFullName: data.FullName,
        enterEmail: data.Email,
        enterPhoneNumber: data['Phone Number'],
    });


})
When ('I click on Confirm booking button',async function(){
    await this.bookingpage.confirmBooking();
    

})
Then ('I should See Booking confirmation message',async function(){
    await expect(this.bookingpage.bookingSuccessMessage).toHaveText(successMessage);

})
When ('I click on View My Bookings',async function(){
    await this.bookingpage.clickViewMyBookings();

})
Then ('the total amount should be correct in My Bookings for 3 tickets', async function(){
    await expect(this.bookingpage.amountmessage).toHaveText('$1,500');


})
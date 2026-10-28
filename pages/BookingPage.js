class BookingPage{

    constructor(page){
        this.page = page;
        this.verifyBookingPageTitle = page.getByText('Book Tickets');
        this.clickonplusicon = page.getByRole('button',{name:'+'});
        this.ticketcount = page.locator("span[id= 'ticket-count' ]");
        this.enterFullName = page.getByRole('textbox', {name: 'Full Name*'});
        this.enterEmail = page.getByRole('textbox', {name: 'Email*'});
        this.enterPhoneNumber = page.getByLabel('Phone Number');
        this.confirmBookingButton = page.getByRole('button', { name: 'Confirm Booking' });
        this.bookingSuccessMessage = page.getByRole('heading',{name: 'Booking Confirmed! 🎉'});
        this.viewBookingsButton = page.getByText('View My Bookings');
        this.amountmessage= page.locator("p[class = 'text-xl font-bold text-indigo-700']");
    }


    async increaseTicketsCount(times){
        for (let i = 0; i < times; i++) {
      await this.clickonplusicon.click();
    }
    }

    async fillBookingDetails(data) {
    await this.enterFullName.fill(data.enterFullName);
    await this.enterEmail.fill(data.enterEmail);
    await this.enterPhoneNumber.fill(data.enterPhoneNumber);
  }

  async confirmBooking() {
    await this.confirmBookingButton.click();
  }

  async clickViewMyBookings() {
    await this.viewBookingsButton.click();
  }
}

module.exports = BookingPage;

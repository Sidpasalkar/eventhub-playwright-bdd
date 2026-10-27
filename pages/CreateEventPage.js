class CreateEventPage {

    constructor(page){

        this.page = page;
        this.addTitle = page.locator('#event-title-input');
        this.addDescription = page.locator('textarea');
        this.addCategory = page.locator('#category');
        this.addCity = page.locator('#city');
        this.addVenue = page.locator('#venue');
        this.addEventDateAndTime = page.locator('[id="event-date-&-time"]');
        this.addPrice = page.locator('[id="price-($)"]');
        this.addTotalSeats = page.locator('#total-seats');
        this.addImageURL = page.locator('[id="image-url-(optional)"]');
        this.AddEventButton = page.getByRole('button', {name:'+ Add Event'});

    }

    async addEventDetails(data){
    await this.addTitle.fill(data.title);
    await this.addDescription.fill(data.description);
    await this.addCategory.selectOption({ label: data.category }); // use click-based steps if it's not a <select>
    await this.addCity.fill(data.city);
    await this.addVenue.fill(data.venue);
    await this.addEventDateAndTime.fill(data.dateTime);
    await this.addPrice.fill(data.price);
    await this.addTotalSeats.fill(data.totalSeats);
    await this.addImageURL.fill(data.imageUrl);

    }

    async clickAddEvent() {
    await this.AddEventButton.click();
  }
}

module.exports = CreateEventPage;



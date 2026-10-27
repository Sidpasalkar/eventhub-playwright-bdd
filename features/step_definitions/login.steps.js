const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const LoginPage = require('../../pages/LoginPage');
const config = require('../../config/config');

Given ('I launch the browser and enter the URL', async function () {
    this.loginpage = new LoginPage(this.page);
    await this.loginpage.openbrowser();    
})

When ('I Enter Valid Username', async function () {
    await this.loginpage.EnterUsername();    
})

When ('I Enter Valid Password', async function () {
    await this.loginpage.EnterPassword();    
})

When('I enter invalid username and password', async function(){
    await this.loginpage.EnterUsername(config.invalidUsername);
    await this.loginpage.EnterPassword(config.invalidPassword);
})

When ('I Click on Login button', async function () {
    await this.loginpage.ClickSignIn();   
})

Then ('I should be able to see the Home Page', async function () {
    await expect(this.page).toHaveURL(`${new URL(config.baseUrl).origin}/`);
})

Then('I should see an error message', async function(){
    const message = await this.loginpage.getErrorMessage();
    expect(message).toContain('Invalid email or password');

})
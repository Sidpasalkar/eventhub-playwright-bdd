const config = require('../config/config');

class LoginPage {

    constructor(page) {
        this.page = page;
        this.username = page.getByPlaceholder('you@email.com');
        this.password = page.getByLabel('Password');
        this.signInButton = page.getByRole('button', { name: 'Sign In' });
        this.errorMessage = page.getByText('Invalid email or password');
    }

    async openbrowser(){
        await this.page.goto(config.baseUrl);
    }

    async EnterUsername(value = config.username){
        await this.username.fill(value);
    }

    async EnterPassword(value = config.password){
        await this.password.fill(value);
    }

    async ClickSignIn(){
        await this.signInButton.click();
    }

    async getErrorMessage(){
        return await this.errorMessage.textContent();
    }
    

}
module.exports = LoginPage;
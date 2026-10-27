require('dotenv').config();

module.exports = {
  baseUrl: process.env.BASE_URL,
  loginPath: process.env.LOGIN_PATH,
  username: process.env.APP_USERNAME,
  password: process.env.APP_PASSWORD,
  headless: process.env.HEADLESS === 'true',
  invalidUsername: process.env.INVALID_USERNAME,
  invalidPassword: process.env.INVALID_PASSWORD,
};

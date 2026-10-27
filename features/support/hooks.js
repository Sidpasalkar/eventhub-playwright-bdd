const {
  Before,
  After,
  BeforeAll,
  AfterAll,
  setDefaultTimeout,
  Status,
} = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const fs = require('node:fs');
const path = require('node:path');

setDefaultTimeout(30 * 1000);

let browser;

BeforeAll(async () => {
  browser = await chromium.launch({ channel: 'msedge', headless: false });
});

Before(async function () {
  this.context = await browser.newContext();
  this.page = await this.context.newPage();
});

After(async function (scenario) {
  try {
    if (scenario.result.status === Status.FAILED) {
      const screenshot = await this.page.screenshot({ fullPage: true });

      this.attach(screenshot, 'image/png');

      const dir = path.join(process.cwd(), 'screenshots');
      fs.mkdirSync(dir, { recursive: true });
      const name = scenario.pickle.name.replace(/[^a-z0-9]/gi, '_');
      fs.writeFileSync(path.join(dir, `${name}.png`), screenshot);
    }
  } finally {
    await this.context.close();
  }
});

AfterAll(async () => {
  await browser.close();
});
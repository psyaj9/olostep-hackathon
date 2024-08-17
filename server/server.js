const express = require('express');
const { Builder, By, until } = require('selenium-webdriver');
const app = express();
const port = 3000;

async function scrapeData() {
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        await driver.get('https://en.wikipedia.org/wiki/2024_Summer_Olympics');

        let element = await driver.wait(until.elementLocated(By.tagName('h1')), 10000);

        let h1Text = await element.getText();

        console.log('H1 Tag Content:', h1Text);

    } catch (error) {
        console.error('Error:', error);
    } finally {

        await driver.quit();
    }
}

app.get('/', (req, res) => {
    res.send(scrapeData());
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
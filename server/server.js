const express = require('express');
const { Builder, By, until } = require('selenium-webdriver');
const { MongoClient } = require('mongodb');
const axios = require('axios');
const app = express();
const port = 3000;

async function scrapeAndStore() {

  const uri = 'mongodb://localhost:27017';
  const client = new MongoClient(uri);

  const url = 'https://en.wikipedia.org/wiki/2024_Summer_Olympics';
  try {
    const response = await axios.get(url);
    if (response.status === 404) {
      console.error('Error 404: Page not found');
      return; 
    }

    await client.connect();

    const database = client.db('webScrapingDB');
    const collection = database.collection('scrapedData');

    let driver = await new Builder().forBrowser('chrome').build();

    try {
      await driver.get(url);

      let element = await driver.wait(until.elementLocated(By.tagName('h1')), 10000);

      let h1Text = await element.getText();

      console.log('h1 Tag Content:', h1Text);

      const dataToStore = { url: url, h1: h1Text, date: new Date() };
      await collection.insertOne(dataToStore);

    } catch (error) {
      if (error.name === 'NoSuchElementError') {
        console.error('Element not found on the page');
      } else if (error.name === 'TimeoutError') {
        console.error('Timed out waiting for the element');
      } else {
        console.error('Error during scraping:', error);
      }
    } finally {
      await driver.quit();
    }

  } catch (err) {
    if (err.response && err.response.status === 404) {
      console.error('Error 404: Page not found)');
    } else {
      console.error('Error connecting to MongoDB or during Axios request:', err);
    }
  } finally {
    await client.close();
  }
}

app.get('/', (req, res) => {
    res.send(scrapeAndStore());
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
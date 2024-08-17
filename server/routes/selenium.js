const express = require('express');
const { Builder, By, until } = require('selenium-webdriver');
const ScrapedData = require('../Models/ScrapedData'); // Assuming you have the model in models/ScrapedData.js
const router = express.Router();

router.post('/scrape', async (req, res) => {
  const { url, browser, userId } = req.body;

  if (!url || !userId) {
    return res.status(400).json({ error: 'URL and userId are required' });
  }

  let driver;

  try {
    // Initialize Selenium WebDriver
    driver = await new Builder().forBrowser(browser).build();
    await driver.get(url);

    // Wait for the page to load and display the necessary data
    await driver.wait(until.elementLocated(By.tagName('body')), 10000);

    // Scrape data (you can adjust the selectors to scrape specific data)
    const scrapedData = {};

    //  Scrape all paragraphs
    const paragraphs = await driver.findElements(By.tagName('p'));
    scrapedData.paragraphs = [];
    for (let p of paragraphs) {
      scrapedData.paragraphs.push(await p.getText());
    }

    //  Scrape all headings
    const headings = await driver.findElements(By.css('h1, h2, h3, h4, h5, h6'));
    scrapedData.headings = [];
    for (let heading of headings) {
      scrapedData.headings.push(await heading.getText());
    }

    //  Scrape all links
    const links = await driver.findElements(By.tagName('a'));
    scrapedData.links = [];
    for (let link of links) {
      const href = await link.getAttribute('href');
      const text = await link.getText();
      scrapedData.links.push({ text, href });
    }

    //  Scrape all images
    const images = await driver.findElements(By.tagName('img'));
    scrapedData.images = [];
    for (let img of images) {
      const src = await img.getAttribute('src');
      const alt = await img.getAttribute('alt');
      scrapedData.images.push({ src, alt });
    }

    //  Scrape page title
    scrapedData.pageTitle = await driver.getTitle();

    // Save the scraped data to MongoDB
    const newScrapedData = new ScrapedData({
      userId,
      url,
      ...scrapedData
    });

    await newScrapedData.save();

    res.json(newScrapedData);
  } catch (error) {
    console.error('Error during scraping:', error);
    res.status(500).json({ error: 'Failed to scrape the website' });
  } finally {
    if (driver) {
      await driver.quit();
    }
  }
});

module.exports = router;
